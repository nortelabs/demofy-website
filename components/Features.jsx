import React from "react";
import { motion } from "framer-motion";

/**
 * Features.jsx
 *
 * Feature grid for the Demofy landing page.
 * - Uses Tailwind for layout and styling.
 * - Uses Framer Motion for subtle entrance animations.
 *
 * Icons are expected to be available at:
 *   /assets/icon-record.svg
 *   /assets/icon-frame.svg
 *   /assets/icon-export.svg
 *
 * Replace image paths with your own assets as needed.
 */

const FEATURES = [
  {
    id: "record",
    title: "Record iOS Simulator",
    description:
      "Capture crisp videos directly from the Xcode Simulator on macOS — fast and reliable. Free forever.",
    icon: "📹",
    isFree: true,
  },
  {
    id: "frames",
    title: "Live Preview with Frames",
    description:
      "Preview your recordings with beautiful iPhone frames in real-time. Try before you buy.",
    icon: "📱",
    isFree: true,
  },
  {
    id: "export",
    title: "Export as MP4 or MOV",
    description:
      "Export your demos in high-quality MP4 or MOV formats, perfect for sharing and presentations. Pro feature.",
    icon: "⚡",
    isFree: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="py-32 bg-dark-bg relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <span className="text-sm text-platinum font-medium">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="text-white">Everything you need</span>
              <br />
              <span className="gradient-text">to create perfect demos</span>
            </h2>
            <p className="text-xl text-platinum max-w-3xl mx-auto leading-relaxed">
              Professional demo creation tools designed for developers and designers who demand quality.
            </p>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
          >
            {FEATURES.map((f, index) => (
              <motion.article
                key={f.id}
                className="group relative p-8 rounded-3xl glass-effect hover:tech-border transition-all duration-500 hover:transform hover:scale-105"
                variants={card}
                role="article"
                aria-labelledby={`feature-${f.id}-title`}
              >
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-oxford-blue/30 border border-oxford-blue/50 flex items-center justify-center mb-6 mx-auto group-hover:bg-oxford-blue/50 transition-colors duration-300">
                      <span className="text-3xl" aria-hidden="true">
                        {f.icon}
                      </span>
                    </div>
                  
                  </div>

                  <h3
                    id={`feature-${f.id}-title`}
                    className="text-2xl font-bold text-white mb-4 group-hover:text-orange-web transition-colors duration-300"
                  >
                    {f.title}
                  </h3>
                  <p className="text-platinum leading-relaxed text-lg">{f.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
