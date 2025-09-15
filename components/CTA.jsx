import React from "react";
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
  return (
    <section
      id="pricing"
      className="py-32 bg-dark-bg relative overflow-hidden"
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
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
            <span className="text-sm text-platinum font-medium">Simple Pricing</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8"
          >
            <span className="text-white">Ready to create</span>
            <br />
            <span className="gradient-text">amazing demos?</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-effect rounded-3xl p-12 mb-12 max-w-2xl mx-auto border border-oxford-blue/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div className="text-center mb-8">
            <div className="text-6xl font-black text-white mb-2">$9.99</div>
            <div className="text-xl text-platinum">One-time payment • No subscriptions</div>
          </div>

          <ul className="text-left space-y-4 mb-8 text-platinum">
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
              20+ iPhone Frame Designs
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-orange-web rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Export as MP4 or MOV
            </li>
          </ul>

          <a
            href="#download"
            className="btn-primary text-xl w-full py-4 inline-flex items-center justify-center gap-3"
            aria-label="Download Demofy for macOS"
          >
            Buy Demofy 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
