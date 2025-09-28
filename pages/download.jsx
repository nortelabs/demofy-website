import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <>
      <Head>
        <title>Download Demofy - Free iOS Simulator Screen Recorder</title>
        <meta
          name="description"
          content="Download Demofy for free and start creating beautiful app demos. Record from iOS Simulator with live preview and frames."
        />
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://demofyapp.com/download" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Download Demofy
              </h1>
             

              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium mb-8">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Free • No account required
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Demofy for Mac</h2>
                <p className="text-slate-600 mb-6">Latest version: 1.0.0</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Record from iOS Simulator
                </div>
                <div className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Live preview with custom frames
                </div>
                <div className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 free HD export included
                </div>
              </div>

              <a 
                href="https://demofyapp.com/Demofy-1.0.dmg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
                download="Demofy-1.0.dmg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for Mac
              </a>
            </motion.div>

            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">System Requirements</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-slate-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    Operating System
                  </h4>
                  <ul className="text-slate-600 space-y-2 ml-7">
                    <li>• macOS 12.0 (Monterey) or later</li>
                    <li>• Compatible with Intel and Apple Silicon Macs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-slate-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    Hardware
                  </h4>
                  <ul className="text-slate-600 space-y-2 ml-7">
                    <li>• 4GB RAM minimum (8GB recommended)</li>
                    <li>• 100MB free disk space</li>
                    <li>• Graphics card supporting Metal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-slate-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z" />
                    </svg>
                    Developer Tools
                  </h4>
                  <ul className="text-slate-600 space-y-2 ml-7">
                    <li>• Xcode 14.0 or later (for iOS Simulator)</li>
                    <li>• iOS Simulator installed and functional</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-slate-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                    </svg>
                    Permissions
                  </h4>
                  <ul className="text-slate-600 space-y-2 ml-7">
                    <li>• Screen Recording permission required</li>
                    <li>• Accessibility permission for best performance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Installation Guide</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Download</h4>
                <p className="text-slate-600 text-sm">Click the download button above to get the latest version of Demofy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Install</h4>
                <p className="text-slate-600 text-sm">Open the downloaded file and drag Demofy to your Applications folder</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Launch</h4>
                <p className="text-slate-600 text-sm">Grant screen recording permissions when prompted and start creating demos</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-slate-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Is Demofy really free?</h4>
                <p className="text-slate-600 text-sm mb-4">Yes! The free version includes all core features and 1 HD export. Upgrade to Pro for unlimited exports.</p>

                <h4 className="font-semibold text-slate-900 mb-2">Do I need an account?</h4>
                <p className="text-slate-600 text-sm mb-4">No account required for the free version. Simply download and start using immediately.</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">What if I need help?</h4>
                <p className="text-slate-600 text-sm mb-4">Contact support at <a href="mailto:contact@demofyapp.com" className="text-orange-web hover:text-orange-web/80 transition-colors duration-300">contact@demofyapp.com</a> for assistance.</p>

                <h4 className="font-semibold text-slate-900 mb-2">How do I upgrade to Pro?</h4>
                <p className="text-slate-600 text-sm">You can upgrade directly from the app or visit our pricing page for more details.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}