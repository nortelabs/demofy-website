import React from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
  const featurebaseAppId = process.env.NEXT_PUBLIC_FEATUREBASE_APP_ID;

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
        <link rel="canonical" href="https://demofyapp.com/" />
      </Head>

      {featurebaseAppId && (
        <>
          <Script id="featurebase-messenger-loader" strategy="afterInteractive">
            {`
              !(function(e,t){var a="featurebase-sdk";function n(){if(!t.getElementById(a)){var e=t.createElement("script");(e.id=a),(e.src="https://do.featurebase.app/js/sdk.js"),t.getElementsByTagName("script")[0].parentNode.insertBefore(e,t.getElementsByTagName("script")[0])}};"function"!=typeof e.Featurebase&&(e.Featurebase=function(){(e.Featurebase.q=e.Featurebase.q||[]).push(arguments)}),"complete"===t.readyState||"interactive"===t.readyState?n():t.addEventListener("DOMContentLoaded",n)})(window,document);
            `}
          </Script>
          <Script id="featurebase-messenger-init" strategy="afterInteractive">
            {`
              window.Featurebase("boot", {
                appId: "${featurebaseAppId}",
                theme: "light",
                language: "en"
              });
            `}
          </Script>
        </>
      )}

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


        {/* Feature grid */}
        <Features />

        {/* Call to action */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
