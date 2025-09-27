import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Enhanced SEO Meta Tags */}
        <title>Demofy - iOS App Mockup & Demo Generator for macOS</title>
        <meta
          name="description"
          content="Create stunning iOS app demos and mockups with Demofy. Record from Xcode Simulator, add device frames, trim videos, and export professional app previews on macOS. Built for developers who need reliable mockup generation."
        />
        <meta name="keywords" content="iOS app demo, mockup generator, Xcode simulator, app preview, video recording, macOS app, app marketing, iOS development" />
        <meta name="author" content="Demofy" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#db7536" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Demofy" />
        <meta name="apple-mobile-web-app-title" content="Demofy" />
        <meta name="msapplication-TileColor" content="#db7536" />
        <meta name="msapplication-TileImage" content="/assets/logo.svg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://demofyapp.com/" />
        <meta property="og:title" content="Demofy - iOS App Mockup & Demo Generator" />
        <meta property="og:description" content="Create stunning iOS app demos and mockups with Demofy. Record from Xcode Simulator, add device frames, trim videos, and export professional app previews." />
        <meta property="og:image" content="https://demofyapp.com/assets/logo.svg" />
        <meta property="og:image:alt" content="Demofy Logo - iOS App Mockup & Demo Generator" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:site_name" content="Demofy" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://demofyapp.com/" />
        <meta property="twitter:title" content="Demofy - iOS App Mockup & Demo Generator" />
        <meta property="twitter:description" content="Create stunning iOS app demos and mockups with Demofy. Record from Xcode Simulator, add device frames, trim videos, and export professional app previews." />
        <meta property="twitter:image" content="https://demofyapp.com/assets/logo.svg" />
        <meta property="twitter:image:alt" content="Demofy Logo - iOS App Mockup & Demo Generator" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://demofyapp.com/" />
        
        {/* Favicon */}
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/logo.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="min-h-screen bg-dark-bg text-white antialiased"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
