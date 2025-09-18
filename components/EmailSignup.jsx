import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * EmailSignup.jsx
 * 
 * Email signup form component for Demofy.
 * Styled to match the website's design with Tailwind CSS.
 * Currently shows a placeholder implementation - needs actual email service integration.
 */

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // TODO: Implement actual email subscription service
      // For now, simulate successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setEmail("");
      setFirstName("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-orange-web rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thanks for subscribing!</h3>
        <p className="text-platinum">
          We'll keep you updated on Demofy news and updates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-platinum">
          Get notified about new features, updates, and tips for creating amazing app demos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-platinum mb-2">
            First Name (Optional)
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-oxford-blue/50 border border-oxford-blue/30 text-white placeholder-platinum/60 focus:outline-none focus:ring-2 focus:ring-orange-web focus:border-transparent transition-all"
            placeholder="Your first name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-platinum mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-oxford-blue/50 border border-oxford-blue/30 text-white placeholder-platinum/60 focus:outline-none focus:ring-2 focus:ring-orange-web focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        {isError && (
          <div className="text-red-400 text-sm text-center">
            Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            <>
              Subscribe to Updates
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-platinum/60 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
}
