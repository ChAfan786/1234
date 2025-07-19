import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-4 sm:mb-6">Cookie Policy</h1>
        <p className="mb-4 text-gray-400 text-sm sm:text-base">Effective Date: July 2025</p>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
          <p className="text-sm sm:text-base">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us understand how you interact with our content and improve your browsing experience.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. How We Use Cookies</h2>
          <p className="text-sm sm:text-base">We use cookies to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base mt-2">
            <li>Enhance website functionality</li>
            <li>Analyze site traffic and user behavior</li>
            <li>Remember your preferences</li>
            <li>Provide targeted advertisements</li>
          </ul>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
            <li><strong>Essential Cookies:</strong> Required for basic site functions.</li>
            <li><strong>Analytical Cookies:</strong> Help us measure and analyze site usage.</li>
            <li><strong>Functional Cookies:</strong> Remember your settings and preferences.</li>
            <li><strong>Advertising Cookies:</strong> Deliver relevant ads based on your interests.</li>
          </ul>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Managing Cookies</h2>
          <p className="text-sm sm:text-base">
            You can control and manage cookies through your browser settings. 
            Disabling certain cookies may affect the functionality of our site.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Third-Party Cookies</h2>
          <p className="text-sm sm:text-base">
            We may use third-party services such as Google Analytics and social media integrations 
            that also use cookies to enhance functionality and insights.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. Updates to This Policy</h2>
          <p className="text-sm sm:text-base">
            We may update this Cookie Policy periodically. Any changes will be posted on this page with the updated date.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-sm sm:text-base">
            For any questions about this Cookie Policy, please contact us at{' '}
            <span className="text-amber-300">nextcodesolution.pk@gmail.com</span>.
          </p>
        </section>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 Next Code Solution. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;