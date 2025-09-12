import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Record Mockups</title>
        <meta
          name="description"
          content="Demofy is a sleek macOS app that makes it effortless to showcase your iOS apps. Record from the Xcode Simulator on macOS, frame your video, trim, and export — all in one app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="min-h-screen bg-muted-1 text-slate-900 antialiased"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
