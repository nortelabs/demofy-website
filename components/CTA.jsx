import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * CTA.jsx
 *
 * Call-to-action section for the Demofy landing page.
 * - Uses Tailwind CSS utility classes for layout and styling.
 * - Uses Framer Motion for entrance + subtle micro-animations.
 *
 * Replace download links and assets as needed.
 */

export default function CTA() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          customerEmail: '', // Will be collected in checkout
          customerName: '', // Will be collected in checkout
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/#pricing`
        })
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="pricing"
      className="py-30 bg-dark-bg relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-oxford-blue/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-8">
            <span className="text-lg text-platinum font-medium">Simple Pricing</span>
          </div>
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            className="glass-effect rounded-3xl p-8 border border-oxford-blue/30"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-white mb-2">Free</div>
              <div className="text-lg text-platinum">Perfect for trying out</div>
            </div>

            <ul className="text-left space-y-3 mb-8 text-platinum">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Record from iOS Simulator
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Live preview with frames
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                1 HD Export
              </li>
            </ul>

            <a
              href="#download"
              className="btn-secondary text-lg w-full py-3 inline-flex items-center justify-center gap-3"
              aria-label="Download Demofy for free"
            >
              Download Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="glass-effect rounded-3xl p-8 border-2 border-orange-web/50 relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-web text-black text-sm font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-black text-white mb-2">$9.99</div>
              <div className="text-lg text-platinum">
                One-time payment • No subscriptions •
                <br />
                <b>30 day money back guarantee</b>
              </div>
            </div>

            <ul className="text-left space-y-3 mb-8 text-platinum">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Everything in Free
              </li>
             
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Unlimited HD Exports 
              </li>
            </ul>

            <button
              onClick={handlePurchase}
              disabled={isLoading}
              className="btn-primary text-lg w-full py-3 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Buy Demofy Pro"
            >
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Buy Demofy Pro
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
