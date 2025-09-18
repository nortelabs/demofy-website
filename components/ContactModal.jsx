import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

/**
 * ContactModal.jsx
 * 
 * Modal component for displaying the contact form.
 * Styled to match the website's design with Tailwind CSS.
 */

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <ContactForm onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
