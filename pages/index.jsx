import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DemoVideo from "../components/DemoVideo";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

/**
 * pages/index.jsx
 *
 * Landing page for Demofy.
 * Composes Header, Hero, Features, CTA and Footer components.
 *
 * This file expects Tailwind + global styles to be present (see /styles/globals.css).
 */

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <title>Mockup and Demo Generator</title>
        <meta
          name="description"
          content="Demofy is a sleek macOS app that makes it effortless to showcase your iOS apps. Record from the Xcode Simulator on macOS, frame your video, trim, and export — all in one app."
        />
        <meta name="theme-color" content="#db7536" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 z-50 rounded px-3 py-2 bg-white border border-slate-200 shadow-sm"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1">
        {/* Hero with animated device mockup */}
        <Hero />

        {/* Demo video section */}
        <DemoVideo />

        {/* Feature grid */}
        <Features />

        {/* Call to action */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
