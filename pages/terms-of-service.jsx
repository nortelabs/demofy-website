import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Demofy</title>
        <meta name="description" content="Terms of Service for Demofy" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Demofy, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of Demofy for personal,
                non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on Demofy are provided on an 'as is' basis. Demofy makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="mb-4">
                In no event shall Demofy or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
              <p className="mb-4">
                The materials appearing on Demofy could include technical, typographical, or
                photographic errors. Demofy does not warrant that any of the materials on its
                website are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at contact@demofyapp.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}