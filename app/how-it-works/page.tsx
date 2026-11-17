import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";

export const metadata = {
  title: "How It Works | Safe Rent Car",
  description: "Learn how easy it is to search, book, and drive with Safe Rent Car.",
};

const steps = [
  {
    step: "01",
    title: "Choose Your Vehicle",
    description:
      "Browse our extensive catalogue of verified cars. Filter by brand, manufacturing year, transmission, fuel type, and passenger capacity to find your exact match.",
    icon: "/car-logo.svg",
  },
  {
    step: "02",
    title: "Customize & Reserve",
    description:
      "Select your pickup dates, airport or downtown return location, and optional add-ons like full collision waiver or GPS. Upfront transparent pricing with zero surprise fees.",
    icon: "/steering-wheel.svg",
  },
  {
    step: "03",
    title: "Instant Digital Verification",
    description:
      "Submit your driver's license digitally in under 2 minutes. Receive your digital key pass and booking confirmation code directly on your mobile device.",
    icon: "/magnifying-glass.svg",
  },
  {
    step: "04",
    title: "Grab the Keys & Drive",
    description:
      "Pick up your sanitised vehicle from our designated express bay or enjoy direct door-to-door concierge delivery. Hit the open road with 24/7 roadside assistance.",
    icon: "/tire.svg",
  },
];

const faqs = [
  {
    q: "What documents do I need to rent a car?",
    a: "You need a valid driver's license held for at least 1 year, a credit card or debit card in the primary renter's name, and a government-issued photo ID or passport.",
  },
  {
    q: "Is there a security deposit required?",
    a: "A temporary pre-authorization hold is placed on your card at pickup and fully released within 48 hours of vehicle return inspection.",
  },
  {
    q: "Can I modify or cancel my reservation?",
    a: "Yes, you can modify or cancel your booking for free up to 24 hours prior to your scheduled pickup time with 100% refund.",
  },
  {
    q: "Are unlimited miles included?",
    a: "Most vehicles in our fleet include unlimited mileage. Any specific vehicle restrictions will be clearly displayed before booking confirmation.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Hero Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Simple 4-Step Process
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          How Safe Rent Car Works
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          From browsing to turning the ignition, we have eliminated the long counter lines, opaque insurance policies, and hidden paperwork.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="mt-16 padding-x max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-primary-blue-100/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl p-8 border border-blue-100/60 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center p-3 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-3xl font-extrabold text-primary-blue/30 group-hover:text-primary-blue transition-colors">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="mt-20 padding-x max-width">
        <div className="bg-pattern bg-cover bg-center rounded-3xl p-10 md:p-14 text-white relative overflow-hidden bg-primary-blue">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
              Guaranteed Satisfaction
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
              Transparent rental terms. No surprises at checkout.
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
              Every car includes standard liability coverage, 24/7 roadside assistance, sanitized interiors, and flexible cancellation policies.
            </p>
            <Link href="/#discover">
              <CustomButton
                title="Browse Vehicle Catalogue"
                containerStyles="bg-white text-primary-blue font-bold rounded-full py-3.5 px-8 shadow-lg hover:bg-gray-100"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-20 padding-x max-width max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm mt-2">Everything you need to know about the rental experience.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 text-base mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
