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
        className="max-w-6xl mx-auto px-6 py-16 lg:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Main Heading with Gradient */}
            <motion.div variants={itemFadeUp} className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight">
                <span className="gradient-text">
                  Record. Frame. Share
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemFadeUp}
              className="text-xl sm:text-2xl text-dark-text max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              The sleek macOS app that makes showcasing your iOS apps effortless.
              <br className="hidden sm:block" />
              Capture, frame, and export in seconds.
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

          {/* Right side - Application photo placeholder */}
          <motion.div
            variants={itemFadeUp}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Application photo placeholder */}
              <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Demofy App</h3>
                    <p className="text-slate-300 text-sm">Application screenshot placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

