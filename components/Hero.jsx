import React from "react";
import { motion } from "framer-motion";

/**
 * Hero component for Demofy landing page.
 * - Uses Framer Motion for simple entrance and looping animations.
 * - Replace /assets/screenshot-placeholder.svg with your real app screenshot.
 */

const SCREENSHOT = "/assets/screenshot-placeholder.svg";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="bg-dark-bg min-h-screen flex items-center pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 py-16 lg:py-0 w-full"
      >
        {/* Centered heading and copy */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemFadeUp} className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight">
              <span className="gradient-text">Capture. Frame. Export</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemFadeUp}
            className="text-xl sm:text-2xl text-dark-text max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The sleek macOS app that makes showcasing your iOS apps effortless.
          </motion.p>

          <motion.div variants={itemFadeUp}>
            <a
              href="#features"
              className="btn-secondary text-xl px-12 py-5 inline-flex items-center gap-3"
            >
              Watch Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5v.01M12 19v.01M8 12h.01M16 12h.01" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

