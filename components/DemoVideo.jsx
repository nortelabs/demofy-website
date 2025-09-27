import React from "react";
import { motion } from "framer-motion";

/**
 * DemoVideo component for Demofy landing page.
 * - Placeholder for demo video section
 * - Uses Framer Motion for animations
 */

export default function DemoVideo() {
  return (
    <section
      id="demo-video"
      className="py-24 bg-white border-t border-gray-200"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="text-black">See Demofy in Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch how easy it is to create professional app demos in just a few clicks.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Video Container */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Demofy demo video"
            >
              <source src="/assets/demo_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle gradient overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
