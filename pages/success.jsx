import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Success() {
  const [licenseKey, setLicenseKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    const key = params.get("license");
    
    if (key) {
      setLicenseKey(key);
      setIsLoading(false);
    } else if (sessionId) {
      // Fetch license key from the backend using session ID
      fetchLicenseKey(sessionId);
    } else {
      // If no session ID, show loading state and try to get the latest order
      setLicenseKey("Generating your license key...");
      fetchLatestLicenseKey();
    }
  }, []);

  const fetchLicenseKey = async (sessionId) => {
    try {
      const response = await fetch(`/api/license?session_id=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.licenseKey) {
          setLicenseKey(data.licenseKey);
          setIsLoading(false);
          return;
        }
      }
    } catch (error) {
      console.error('Error fetching license key:', error);
    }
    
    // Fallback: poll for license key
    pollForLicenseKey();
  };

  const fetchLatestLicenseKey = async () => {
    try {
      const response = await fetch('/api/license?latest=true');
      if (response.ok) {
        const data = await response.json();
        if (data.licenseKey) {
          setLicenseKey(data.licenseKey);
          setIsLoading(false);
          return;
        }
      }
    } catch (error) {
      console.error('Error fetching latest license key:', error);
    }
    
    // Fallback: poll for license key
    pollForLicenseKey();
  };

  const pollForLicenseKey = () => {
    let attempts = 0;
    const maxAttempts = 10;
    
    const poll = async () => {
      if (attempts >= maxAttempts) {
        setLicenseKey("DEMOFY-XXXX-XXXX-XXXX-XXXX");
        setIsLoading(false);
        return;
      }
      
      attempts++;
      
      try {
        const response = await fetch('/api/license?latest=true');
        if (response.ok) {
          const data = await response.json();
          if (data.licenseKey) {
            setLicenseKey(data.licenseKey);
            setIsLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error('Error polling for license key:', error);
      }
      
      // Try again in 2 seconds
      setTimeout(poll, 2000);
    };
    
    poll();
  };

  const copyLicenseKey = async () => {
    try {
      await navigator.clipboard.writeText(licenseKey);
      setCopySuccess(true);
      // Hide the success message after 2 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy license key:', err);
    }
  };

  const downloadDMG = () => {
    const link = document.createElement("a");
    link.href = "/downloads/Demofy.dmg";
    link.download = "Demofy.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Purchase Complete - Demofy</title>
        <meta
          name="description"
          content="Thank you for purchasing Demofy! Download your app and get started creating amazing demos."
        />
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Purchase Complete!
            </h1>
            <p className="text-xl text-slate-600">
              Thank you for purchasing Demofy. Your app is ready to download.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Download Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Demofy
              </h2>

              <div className="mb-6">
                <button
                  onClick={downloadDMG}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Download for macOS (.dmg)
                </button>
              </div>

              <div className="text-sm text-slate-600 bg-slate-50 rounded-lg p-4">
                <p className="font-medium mb-2">System Requirements:</p>
                <ul className="space-y-1">
                  <li>• macOS 12.0 or later</li>
                  <li>• Xcode installed (for iOS Simulator)</li>
                  <li>• Apple Silicon or Intel processor</li>
                  <li>• At least 2 GB of available storage</li>
                </ul>
              </div>
            </div>

            {/* License Key Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Your License Key
              </h2>

              <div className="mb-6">
                <div className="bg-slate-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-slate-800 break-all">
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {licenseKey}
                        </span>
                      ) : (
                        licenseKey
                      )}
                    </code>
                    <button
                      onClick={copyLicenseKey}
                      disabled={isLoading || licenseKey === "DEMOFY-XXXX-XXXX-XXXX-XXXX"}
                      className={`ml-3 p-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                        copySuccess 
                          ? "text-green-600 bg-green-100" 
                          : "text-slate-500 hover:text-slate-700 hover:bg-slate-200"
                      }`}
                      title={isLoading ? "Generating license key..." : copySuccess ? "Copied!" : "Copy license key"}
                    >
                      {copySuccess ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  {isLoading ? "Generating your license key..." : "You'll need this license key to activate Demofy after installation."}
                </p>
                {copySuccess && (
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    License key copied successfully!
                  </div>
                )}
              </div>

              <div className="text-sm text-slate-600 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <p className="font-medium text-amber-800 mb-1">Important:</p>
                <p className="text-amber-700">
                  Save this license key in a secure location. You can also find it in your email receipt.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mt-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Installation Instructions
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Download and Open</h3>
                  <p className="text-slate-600">Click the download button above to get the Demofy.dmg file. Once downloaded, double-click to open it.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Install the App</h3>
                  <p className="text-slate-600">Drag the Demofy app icon to your Applications folder to install it.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Launch and Activate</h3>
                  <p className="text-slate-600">Open Demofy from your Applications folder and enter your license key when prompted.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Start Creating</h3>
                  <p className="text-slate-600">Begin recording demos from Xcode Simulator and create beautiful showcase videos!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mt-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5V6.5m0 11V21.5m9.5-9.5H17.5m-11 0H2.5" />
              </svg>
              Need Help?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email Support</h3>
                  <a href="mailto:support@demofy.app" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    support@demofy.app
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Report Bugs and Feature Requests</h3>
                  <a href="https://demofyapp.featurebase.app/" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    Click Here
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <span className="font-medium">Response Time:</span> We typically respond to support requests within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}