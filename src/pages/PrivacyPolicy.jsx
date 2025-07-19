import React from 'react';

const PricingPolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-4 sm:mb-6">Pricing Policy</h1>
        <p className="mb-4 text-gray-400 text-sm sm:text-base">Effective Date: July 2025</p>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Transparent Pricing</h2>
          <p className="text-sm sm:text-base">
            At Next Code Solution, we offer clear and competitive pricing tailored to your project requirements. 
            Every project quote is shared upfront with no hidden charges.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. Payment Terms</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
            <li>50% advance payment on project initiation</li>
            <li>Remaining 50% upon project completion & client satisfaction</li>
            <li>Custom payment terms may be arranged for long-term projects</li>
          </ul>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Refund Policy</h2>
          <p className="text-sm sm:text-base">
            Refunds are applicable only if the project is canceled by the client before any significant 
            development work has started. Once major milestones are completed, refunds are not provided.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Pricing Variability</h2>
          <p className="text-sm sm:text-base">Prices may vary based on:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
            <li>Project complexity & features required</li>
            <li>Urgency and timeline</li>
            <li>Technology stack involved</li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Contact for Quotation</h2>
          <p className="text-sm sm:text-base">
            For a personalized quote, contact us directly at <span className="text-amber-300">nextcodesolution.pk@gmail.com</span> 
            or via our contact form.
          </p>
        </section>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 Next Code Solution. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;