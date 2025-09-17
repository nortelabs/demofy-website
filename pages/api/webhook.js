// pages/api/webhook.js
// Stripe webhook handler for Next.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { ConvexHttpClient } = require("convex/browser");
import { setSecurityHeaders } from '../../lib/security';

// Initialize Convex client
const convex = new ConvexHttpClient(process.env.CONVEX_URL);

// Disable body parsing for webhook signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Apply security headers
  setSecurityHeaders(res);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Get the raw body for webhook signature verification
    const rawBody = await getRawBody(req);
    
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(`Received webhook event: ${event.type} (${event.id})`);

  try {
    // First, store the webhook event in Convex
    console.log('Storing webhook event in Convex...');
    await convex.mutation("stripe:storeWebhookEvent", {
      eventId: event.id,
      eventType: event.type,
      data: event.data.object,
      processed: false
    });

    let result;

    switch (event.type) {
      case 'checkout.session.completed':
        result = await handleCheckoutCompleted(event.data.object);
        break;
      case 'payment_intent.succeeded':
        result = await handlePaymentSucceeded(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        result = await handlePaymentFailed(event.data.object);
        break;
      default:
        console.log(`Unhandled webhook event type: ${event.type}`);
        result = { processed: true, reason: 'unhandled_event_type' };
    }

    // Mark the event as processed
    await convex.mutation("stripe:markWebhookProcessed", {
      eventId: event.id,
      success: true
    });

    res.json({ received: true, processed: result });

  } catch (error) {
    console.error(`Error processing webhook ${event.id}:`, error);
    
    // Mark the event as failed
    try {
      await convex.mutation("stripe:markWebhookProcessed", {
        eventId: event.id,
        success: false,
        error: error.message
      });
    } catch (markError) {
      console.error('Failed to mark webhook as failed:', markError);
    }
    
    res.status(500).json({ error: error.message });
  }
}

// Helper function to get raw body
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(Buffer.from(data));
    });
    req.on('error', err => {
      reject(err);
    });
  });
}

// Handle checkout session completed
async function handleCheckoutCompleted(session) {
  console.log('Checkout session completed:', session.id);
  
  // Generate license key
  const licenseKey = generateLicenseKey();
  console.log('Generated license key for session:', session.id);
  
  // Create order record (use order id from metadata if present)
  const orderId = session.metadata?.orderId || `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  console.log('Using order ID:', orderId);
  
  try {
    // Check if order already exists
    console.log('Checking if order exists...');
    let existingOrder = null;
    try {
      existingOrder = await convex.query("stripe:getOrder", { orderId });
    } catch (e) {
      console.log('Error checking existing order:', e.message);
    }

    if (!existingOrder) {
      // Create order in Convex
      console.log('Creating order in Convex...');
      try {
        const orderResult = await convex.mutation("stripe:createOrder", {
          orderId,
          customerEmail: session.customer_email || session.customer_details?.email || '',
          customerName: session.customer_details?.name || '',
          amount: session.amount_total,
          currency: session.currency,
          productId: session.metadata?.productId || 'unknown',
          priceId: session.metadata?.priceId || 'unknown',
          status: 'completed',
          metadata: {
            source: 'stripe_checkout'
          }
        });
        console.log('Order created successfully:', orderResult);
      } catch (e) {
        console.log('createOrder failed:', e.message);
        throw e;
      }
    } else {
      console.log('Order already exists, updating status...');
      // Update existing order status
      try {
        await convex.mutation("stripe:updateOrderStatus", {
          orderId,
          status: 'completed',
          paymentIntentId: session.payment_intent
        });
        console.log('Order status updated successfully');
      } catch (e) {
        console.log('updateOrderStatus failed:', e.message);
      }
    }

    // Create license key in Convex
    console.log('Creating license key in Convex...');
    const licenseKeyId = await convex.mutation("licenseKeys:createLicenseKey", {
      key: licenseKey,
      metadata: {
        source: "stripe_purchase",
        tier: "pro",
        notes: `Generated for order ${orderId}`
      }
    });
    console.log('License key created successfully:', licenseKeyId);

    // Update order with session id and license key
    console.log('Updating order with session ID...');
    try {
      await convex.mutation("stripe:updateOrderSession", { orderId, sessionId: session.id });
      console.log('Order session updated successfully');
    } catch (e) {
      console.log('updateOrderSession failed:', e.message);
    }
    
    console.log('Updating order with license key...');
    try {
      await convex.mutation("stripe:updateOrderLicenseKey", { orderId, licenseKeyId: licenseKeyId.id });
      console.log('Order license key updated successfully');
    } catch (e) {
      console.log('updateOrderLicenseKey failed:', e.message);
    }

    console.log('License key generated successfully for order:', orderId);
    return { processed: true, orderId, licenseKeyId };

  } catch (error) {
    console.error('Error creating order/license:', error);
    console.error('Error stack:', error.stack);
    throw error;
  }
}

// Handle payment succeeded
async function handlePaymentSucceeded(paymentIntent) {
  console.log('Payment succeeded:', paymentIntent.id);
  
  // For now, just log - the checkout.session.completed should handle license generation
  return { processed: true, reason: 'payment_succeeded' };
}

// Handle payment failed
async function handlePaymentFailed(paymentIntent) {
  console.log('Payment failed:', paymentIntent.id);
  return { processed: true, reason: 'payment_failed' };
}

// Generate license key
function generateLicenseKey() {
  const segments = [];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  for (let i = 0; i < 4; i++) {
    let segment = "";
    for (let j = 0; j < 4; j++) {
      segment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    segments.push(segment);
  }
  
  return `DEMOFY-${segments.join("-")}`;
}
