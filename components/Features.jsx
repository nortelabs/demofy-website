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
    title: "One-Click Recording",
    description:
      "Capture crisp videos directly from the Xcode Simulator on macOS — fast and reliable.",
    icon: "📹",
  },
  {
    id: "frame",
    title: "Beautiful Mockups",
    description:
      "Instantly place your recordings inside a clean, minimal phone mockup for polished screenshots and presentations.",
    icon: "📱",
  },
  {
    id: "export",
    title: "Smart Export",
    description:
      "Trim your demo to the perfect length and export in web-ready formats (MP4, GIF) with sensible presets.",
    icon: "⚡",
  },
  {
    id: "professional",
    title: "Professional Quality",
    description:
      "Generate marketing-ready content with pixel-perfect precision and consistent branding across all your demos.",
    icon: "✨",
  },
  {
    id: "workflow",
    title: "Seamless Workflow",
    description:
      "Integrate effortlessly into your development process with automated export pipelines and batch processing.",
    icon: "🔄",
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description:
      "Share templates and export presets with your team to maintain consistency across all product demos.",
    icon: "👥",
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
    <section id="features" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Everything you need</span>
              <br />
              <span className="gradient-text">to create perfect demos</span>
            </h2>
            <p className="text-xl text-dark-text max-w-3xl mx-auto leading-relaxed">
              Built for developers and designers who demand professional results without the complexity.
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
          >
            {FEATURES.map((f) => (
              <motion.article
                key={f.id}
                className="bg-dark-card/30 p-8 rounded-2xl border border-dark-border/50 backdrop-blur-sm hover:bg-dark-card/50 transition-all duration-300"
                variants={card}
                role="article"
                aria-labelledby={`feature-${f.id}-title`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl" aria-hidden="true">
                      {f.icon}
                    </span>
                  </div>

                  <h3
                    id={`feature-${f.id}-title`}
                    className="text-xl font-bold text-white mb-4"
                  >
                    {f.title}
                  </h3>
                  <p className="text-dark-text leading-relaxed">{f.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Additional CTA section */}
          <motion.div
            className="text-center mt-16"
            variants={card}
          >
            <a
              href="#download"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
            >
              Start Creating Amazing Demos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
