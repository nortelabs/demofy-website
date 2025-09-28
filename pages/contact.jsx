import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Demofy</title>
        <meta
          name="description"
          content="Get in touch with the Demofy team. We're here to help with technical support, billing questions, feature requests, and more."
        />
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://demofyapp.com/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="min-h-screen bg-slate-50 pt-20 font-['Chivo'] relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Contact Us
              </h1>
              
              <div className="w-20 h-0.5 bg-slate-900 rounded-full mx-auto"></div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 relative group hover:shadow-2xl transition-all duration-300"
            >
              
              {isSuccess ? (
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="relative z-9">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-2 group-focus-within:text-orange-600 transition-colors">
                          Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 hover:border-slate-300 transition-all duration-200 shadow-sm"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2 group-focus-within:text-orange-600 transition-colors">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 hover:border-slate-300 transition-all duration-200 shadow-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-2 group-focus-within:text-orange-600 transition-colors">
                        Subject *
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 hover:border-slate-300 transition-all duration-200 shadow-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="feature">Feature Request</option>
                          <option value="bug">Bug Report</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-violet-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-2 group-focus-within:text-orange-600 transition-colors">
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 hover:border-slate-300 transition-all duration-200 resize-none shadow-sm"
                          placeholder="Describe your issue or question in detail..."
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-violet-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                      </div>
                    </div>

                    {isError && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-2xl"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-red-700 font-medium">Something went wrong. Please try again.</span>
                        </div>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="flex items-center justify-center mt-3 p-2 bg-slate-50/50 rounded-xl">
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium">We typically respond within 24 hours during business days.</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Contact Info & Refund Policy Combined */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 relative group hover:shadow-2xl transition-all duration-300"
            >
              
              <div className="relative z-10">
                {/* Single Column Layout */}
                <div className="space-y-6">
                  {/* Email Support Section */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Email Support</h3>
                  </div>
                  
                  <div className="flex items-start group/item hover:bg-slate-50 rounded-xl p-3 transition-all duration-200">
                    <div className="flex-1">
                      <p className="text-slate-600 text-sm mb-3">Get help with installation or licensing issues</p>
                      <a href="mailto:contact@demofyapp.com" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors group/link">
                        <span>contact@demofyapp.com</span>
                        <svg className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Refund Policy Section */}
                  <div className="border-t border-slate-200 pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Refund Policy</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start group/item hover:bg-slate-50 rounded-xl p-2 transition-all duration-200">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-xl transition-all duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-sm mb-0.5">14-Day Money Back Guarantee</h4>
                          <p className="text-slate-600 text-sm mb-1">
                            Not satisfied? We offer a full refund within 14 days of purchase.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start group/item hover:bg-slate-50 rounded-xl p-2 transition-all duration-200">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-xl transition-all duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-sm mb-0.5">Processing Time</h4>
                          <p className="text-slate-600 text-xs mb-1">
                            Refunds are processed within 5-10 business days.
                          </p>
                          <p className="text-slate-500 text-xs">
                            Money appears back in your original payment method.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start group/item hover:bg-slate-50 rounded-xl p-2 transition-all duration-200">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-xl transition-all duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-sm mb-0.5">How to Request a Refund</h4>
                          <p className="text-slate-600 text-sm mb-1">
                            Use the form and select "Billing Question" as the subject.
                          </p>
                          <p className="text-slate-500 text-sm">
                            Include your purchase email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}