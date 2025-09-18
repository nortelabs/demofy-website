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
          className="fixed bottom-6 right-6 z-50 bg-oxford-blue hover:bg-oxford-blue/80 text-white p-4 rounded-2xl shadow-xl backdrop-blur-sm border border-orange-web/30 transition-all duration-300 ease-in-out hover:scale-110 glow-pulse"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <footer className="bg-dark-bg border-t border-oxford-blue/50 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
          <div className="text-center">

            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-platinum text-sm">
                © {year} Demofy by Norte Labs. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-platinum hover:text-orange-web transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-platinum hover:text-orange-web transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
