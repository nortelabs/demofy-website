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
      className="py-32 bg-[#fca311] relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          id="pricing-heading"
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="gradient-text">Ready to create</span>
          <br />
          <span className="gradient-text">amazing demos?</span>
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <a
            href="#pricing"
            className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-5 inline-flex items-center gap-3 rounded-lg font-semibold transition-colors"
            onClick={(e) => e.preventDefault()}
            aria-label="Download Demofy for macOS"
          >
            Download Demofy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <p className="text-4xl font-bold text-white">
            One-time payment of $15 • No subscriptions!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
