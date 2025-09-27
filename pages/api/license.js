// pages/api/license.js
// API endpoint to fetch license keys

import { ConvexHttpClient } from "convex/browser";
import { runMiddleware, rateLimiter, corsMiddleware, setSecurityHeaders } from '../../lib/security';

// Initialize Convex client
const convex = new ConvexHttpClient(process.env.CONVEX_URL);

export default async function handler(req, res) {
  // Apply security headers
  setSecurityHeaders(res);

  // Apply CORS
  await runMiddleware(req, res, corsMiddleware);

  // Apply rate limiting
  await runMiddleware(req, res, rateLimiter);
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { session_id, latest } = req.query;

    if (session_id) {
      // Fetch license key by session ID
      const order = await convex.query("stripe:getOrderBySessionId", { sessionId: session_id });
      
      if (!order || !order.licenseKeyId) {
        return res.status(404).json({ error: 'License key not found for this session' });
      }

      // Get the license key details
      const licenseKey = await convex.query("licenseKeys:getLicenseKeyById", { id: order.licenseKeyId });
      
      if (!licenseKey) {
        return res.status(404).json({ error: 'License key not found' });
      }

      return res.json({
        licenseKey: licenseKey.key,
        orderId: order.orderId,
        customerEmail: order.customerEmail
      });
    } else if (latest) {
      // Fetch the most recent completed order with a license key
      const orders = await convex.query("stripe:getAllOrders", { 
        status: "completed",
        limit: 1 
      });

      if (orders.length === 0) {
        return res.status(404).json({ error: 'No completed orders found' });
      }

      const order = orders[0];
      
      if (!order.licenseKeyId) {
        return res.status(404).json({ error: 'No license key found for the latest order' });
      }

      // Get the license key details
      const licenseKey = await convex.query("licenseKeys:getLicenseKeyById", { id: order.licenseKeyId });
      
      if (!licenseKey) {
        return res.status(404).json({ error: 'License key not found' });
      }

      return res.json({
        licenseKey: licenseKey.key,
        orderId: order.orderId,
        customerEmail: order.customerEmail
      });
    } else {
      return res.status(400).json({ error: 'Missing required parameter: session_id or latest' });
    }

  } catch (error) {
    console.error('License API error:', error);
    res.status(500).json({
      error: 'Failed to fetch license key',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}
