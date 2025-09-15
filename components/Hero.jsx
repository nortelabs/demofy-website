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
    <section className="bg-dark-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oxford-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-web/10 rounded-full blur-3xl"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 py-16 lg:py-0 w-full relative z-10"
      >
        {/* Centered heading and copy */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div variants={itemFadeUp} className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight mb-8">
              <span className="text-white">Demo-ready videos,</span>
              <br />
              <span className="gradient-text">without the hassle.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-platinum max-w-3xl mx-auto leading-relaxed font-light">
              Record from iOS Simulator and preview with frames for free.
              Unlock export features to create stunning MP4 or MOV demo videos.
            </p>
          </motion.div>

          <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="btn-primary text-lg inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Try Free Now
            </a>
            <a
              href="#demo-video"
              className="btn-secondary text-lg inline-flex items-center gap-3"
            >
             
              Watch Demo
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

