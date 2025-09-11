import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#DB7536] hover:bg-[#c4622a] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <footer className="bg-dark-bg backdrop-blur-md bg-black/80">
        <div className="max-w-2xl mx-auto px-6 py-8">    
          <div className="flex flex-col items-center gap-4">
            <div className="text-white text-sm text-center">
              © {year} Demofy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
