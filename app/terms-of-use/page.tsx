import React from "react";

export const metadata = {
  title: "Terms of Use | Safe Rent Car",
  description: "Review the terms and conditions governing vehicle rentals and services with Safe Rent Car.",
};

export default function TermsOfUsePage() {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      <section className="padding-x max-width max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Agreement & Guidelines
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Terms of Use & Rental Agreement
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: November 2024</p>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Driver Eligibility & Age Requirements</h2>
            <p className="mb-2">
              To operate any vehicle rented via Safe Rent Car, primary and secondary drivers must:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Be at least 21 years of age (renters aged 21-24 may incur a standard young driver surcharge).</li>
              <li>Possess an unexpired, valid government-issued driver’s license held continuously for at least 12 months.</li>
              <li>Present a physical payment card matching the legal name on the driver&apos;s license.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Reservations, Cancellations & Deposits</h2>
            <p>
              Free cancellations with full refunds are honored up to 24 hours prior to scheduled pickup. A temporary authorization hold (security deposit) is placed on your card at vehicle pickup and released upon satisfactory return inspection.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Prohibited Vehicle Uses</h2>
            <p className="mb-2">
              Violation of prohibited use rules voids all collision protection packages and incurs financial liability:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Operating under the influence of alcohol, narcotics, or prescription medication impairing driving ability.</li>
              <li>Racing, track days, speed tests, or reckless driving exhibitions.</li>
              <li>Towing trailers, excessive off-roading, or unauthorized commercial ridesharing subletting.</li>
              <li>Allowing any unauthorized driver not listed on the rental agreement to operate the vehicle.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Fuel, Electric Charging & Cleanliness</h2>
            <p>
              Vehicles must be returned at the same fuel or battery charge level recorded at handover. Standard wear and tear is expected, but excessive debris, smoke odors, or pet hair requiring specialized detailing may incur an interior restoration fee.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Safe Rent Car maintains its fleet according to strict manufacturer maintenance schedules. Except as mandated by consumer protection statutes, Safe Rent Car is not liable for incidental, indirect, or consequential damages arising from vehicle mechanical breakdown.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
