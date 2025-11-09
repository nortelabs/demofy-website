import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Header.jsx
 *
 * Top navigation for the Demofy landing page.
 * - Responsive: shows inline nav on desktop and a toggleable menu on mobile.
 * - Accessible: hamburger button has aria attributes, links are keyboard-focusable.
 * - Uses Tailwind utility classes consistent with the rest of the site.
 *
 * Assets expected:
 *  - /assets/logo.svg
 *
 * Replace or extend links as needed.
 */

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu when navigating
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <header className="bg-dark-bg/90 z-40 fixed w-full top-0 backdrop-blur-xl border-b border-oxford-blue/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-web rounded-lg"
          >
            <span className="font-bold text-white text-2xl">Demofy</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-platinum hover:text-orange-web transition-colors duration-300 font-medium">Features</a>
          <a href="/#pricing" className="text-platinum hover:text-orange-web transition-colors duration-300 font-medium">Pricing</a>
          <Link
            href="https://demofyapp.featurebase.app/"
            className="text-platinum hover:text-orange-web transition-colors duration-300 font-medium"
          >
            Report Bugs
          </Link>
        </nav>

        {/* Mobile: right side actions */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/download"
            className="btn-primary text-sm px-4 py-2 hidden sm:inline-flex"
          >
            Download
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg inline-flex items-center justify-center text-platinum hover:text-white hover:bg-oxford-blue focus:outline-none focus:ring-2 focus:ring-orange-web transition-colors duration-300"
          >
            {/* Hamburger / Close icon */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (overlay panel) */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 pb-6">
          <div className="glass-effect rounded-2xl p-6">
            <nav className="flex flex-col gap-4">
              <a
                href="/#features"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-white hover:text-orange-web hover:bg-oxford-blue/50 transition-all duration-300 font-medium"
              >
                Features
              </a>

              <a
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-white hover:text-orange-web hover:bg-oxford-blue/50 transition-all duration-300 font-medium"
              >
                Pricing
              </a>
              <Link 
                href="https://demofyapp.featurebase.app/"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-white hover:text-orange-web hover:bg-oxford-blue/50 transition-all duration-300 font-medium"
              >
                Report Bugs
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
