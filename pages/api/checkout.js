// pages/api/checkout.js
// Next.js API route for handling Stripe checkout

import Stripe from 'stripe';
import { runMiddleware, paymentRateLimiter, corsMiddleware, setSecurityHeaders } from '../../lib/security';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Apply security headers
  setSecurityHeaders(res);

  // Apply CORS
  await runMiddleware(req, res, corsMiddleware);

  // Apply rate limiting
  await runMiddleware(req, res, paymentRateLimiter);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      priceId, 
      customerEmail, 
      customerName, 
      successUrl, 
      cancelUrl,
      metadata = {} 
    } = req.body;

    // Validate required fields
    if (!priceId || !successUrl || !cancelUrl) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['priceId', 'successUrl', 'cancelUrl']
      });
    }

    // Validate email format if provided
    if (customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Create Stripe checkout session directly
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      // Include the session id in the return URL so the success page can fetch the license
      success_url: successUrl + (successUrl.includes('?') ? '&' : '?') + 'session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl,
      metadata: {
        source: 'nextjs_website',
        orderId: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ...metadata
      }
    });

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url,
      orderId: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error('Checkout API error:', error);
    res.status(500).json({
      error: 'Failed to create checkout session',
      message: error.message
    });
  }
}
