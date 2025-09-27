// lib/security.js
// Security middleware for API routes

import rateLimit from 'express-rate-limit';
import cors from 'cors';

// Rate limiting configuration
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests, please try again later.',
    retryAfter: 15 * 60 // 15 minutes in seconds
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req) => {
    // Use a fallback for IP address in serverless environments
    return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
  },
  skip: (req) => {
    // Skip rate limiting if we can't determine the IP
    return !req.ip && !req.connection?.remoteAddress && !req.socket?.remoteAddress;
  }
});

// Stricter rate limiting for payment endpoints
export const paymentRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 payment requests per windowMs
  message: {
    error: 'Too many payment requests, please try again later.',
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use a fallback for IP address in serverless environments
    return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
  },
  skip: (req) => {
    // Skip rate limiting if we can't determine the IP
    return !req.ip && !req.connection?.remoteAddress && !req.socket?.remoteAddress;
  }
});

// CORS configuration
export const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Define allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://demofyapp.com',
      'https://www.demofyapp.com',
      // Add additional domains from environment variables if needed
      ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [])
    ];

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'stripe-signature'],
  credentials: true
};

// Initialize CORS middleware
export const corsMiddleware = cors(corsOptions);

// Helper function to run middleware in Next.js API routes
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Stricter rate limiting for contact form
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.',
    retryAfter: 15 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
  },
  skip: (req) => {
    return !req.ip && !req.connection?.remoteAddress && !req.socket?.remoteAddress;
  }
});

// Security headers helper
export function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.stripe.com https://*.convex.cloud https://vitals.vercel-insights.com https://va.vercel-scripts.com; frame-ancestors 'none';");
}