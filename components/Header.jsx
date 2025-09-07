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
    <header className="bg-dark-bg z-40 fixed w-full top-0 backdrop-blur-md bg-black/80">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" legacyBehavior>
            <a className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded">
              <span className="font-bold text-white text-2xl md:text-3xl">Demofy</span>
            </a>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#features" legacyBehavior>
            <a className="text-white text-lg hover:text-gray-300 transition-colors">Features</a>
          </Link>
          <Link href="#pricing" legacyBehavior>
            <a className="text-white text-lg hover:text-gray-300 transition-colors">Pricing</a>
          </Link>
          <Link href="#help" legacyBehavior>
            <a className="text-white text-lg hover:text-gray-300 transition-colors flex items-center gap-1">
             Contact Us
            </a>
          </Link>
          <a
            href="#download"
            className="bg-[#fcbf49] text-white hover:bg-[#fcbf49] px-6 py-2 rounded-lg font-medium transition-colors ml-4 flex items-center gap-2"
          >
            <span>Download</span>
          </a>
        </nav>

        {/* Mobile: right side actions */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#download"
            className="bg-[#fcbf49] text-white hover:bg-[#fcbf49] text-sm px-4 py-2 rounded-lg font-medium transition-colors hidden sm:inline-flex items-center gap-1"
          >
            <span>Download</span>
            <span className="text-xs text-white/80">Free</span>
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md inline-flex items-center justify-center text-dark-text hover:text-white hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
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
          <div className="bg-dark-card rounded-lg border border-dark-border shadow-sm p-4">
            <nav className="flex flex-col gap-3">
              <Link href="#features" legacyBehavior>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800"
                >
                  Features
                </a>
              </Link>

              <Link href="#pricing" legacyBehavior>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800"
                >
                  Pricing
                </a>
              </Link>

              <Link href="#help" legacyBehavior>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800"
                >
                  Contact Us
                </a>
              </Link>

              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#DB7536] text-white hover:bg-[#c4622a] px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Download</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
