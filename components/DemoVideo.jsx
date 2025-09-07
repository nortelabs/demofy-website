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
      id="features"
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
          {/* Video Placeholder */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Demo Video Coming Soon</h3>
                <p className="text-gray-300">Watch how Demofy transforms your app showcasing workflow</p>
              </div>
            </div>
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Play button overlay */}
          <motion.button
            className="absolute inset-0 flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Play demo video"
          >
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
