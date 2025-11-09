import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>

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
