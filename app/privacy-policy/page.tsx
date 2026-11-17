import React from "react";

export const metadata = {
  title: "Privacy Policy | Safe Rent Car",
  description: "Learn how Safe Rent Car collects, protects, and handles your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      <section className="padding-x max-width max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Legal & Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: November 2024</p>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-2">
              When you browse, reserve, or rent a vehicle through Safe Rent Car, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li><strong>Contact Information:</strong> Full legal name, email address, phone number, and physical billing address.</li>
              <li><strong>Driver Credentials:</strong> Valid driver’s license number, issuing jurisdiction, expiration date, and verified identity documents.</li>
              <li><strong>Payment Information:</strong> Tokenized credit or debit card data processed securely via PCI-DSS compliant payment gateways.</li>
              <li><strong>Vehicle Telematics:</strong> Basic vehicle diagnostics, odometer readings, fuel/battery charge levels, and location data solely for vehicle safety and roadside recovery.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">
              We process your personal information for lawful, operational purposes including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Confirming and managing your car reservations and digital rental agreements.</li>
              <li>Conducting automated driving history and risk safety verifications.</li>
              <li>Dispatching 24/7 roadside emergency assistance when requested.</li>
              <li>Preventing fraud, illegal vehicle transport, and unauthorized key cloning.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Sharing & Third Parties</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third-party data brokers. We share data only with necessary service providers: payment processors, licensed roadside dispatch networks, and regulatory authorities when strictly required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Security Measures</h2>
            <p>
              All traffic between your browser and our servers is encrypted using 256-bit TLS/SSL protocols. Data at rest is safeguarded using industry-standard AES encryption with strict role-based access controls.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Rights (GDPR & CCPA)</h2>
            <p>
              Depending on your location, you have the right to request access to your personal data, rectify inaccuracies, request account deletion, or opt out of promotional communications at any time by contacting our Data Protection Officer at <strong className="text-primary-blue">privacy@saferentcar.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
