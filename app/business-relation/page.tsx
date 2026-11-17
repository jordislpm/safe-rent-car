"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";

const corporateBenefits = [
  {
    title: "Centralized Billing & Invoicing",
    description: "Receive one consolidated monthly invoice with custom PO tags, expense code categorization, and automated tax accounting.",
    icon: "/model-icon.png",
  },
  {
    title: "VIP Executive Airport Bay",
    description: "Your executives bypass counters with dedicated express pickup, pre-conditioned vehicles, and direct curbside drop-off.",
    icon: "/steering-wheel.svg",
  },
  {
    title: "Volume Discount Pricing",
    description: "Save up to 35% on standard daily rates with flexible short-term and long-term corporate lease contracts.",
    icon: "/gas.svg",
  },
  {
    title: "24/7 Dedicated Account Lead",
    description: "Direct line to your personal account manager for urgent vehicle swaps, emergency roadside dispatch, and VIP requests.",
    icon: "/tire.svg",
  },
];

export default function BusinessRelationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    workEmail: "",
    fleetNeeds: "5-15 vehicles / month",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Enterprise & B2B Solutions
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Corporate Car Rental & Fleet Mobility
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Scale your company travel with zero administrative overhead. Flexible terms, volume discounts, and premium vehicles for business trips.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="mt-16 padding-x max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-primary-blue-100/50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl p-8 border border-blue-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center p-3 mb-6">
                  <Image src={item.icon} alt={item.title} width={24} height={24} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Inquiry Form */}
      <section className="mt-20 padding-x max-width max-w-3xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Request a Corporate Rate Sheet</h2>
            <p className="text-sm text-gray-500 mt-2">
              Get customized business rental rates tailored to your company travel schedule.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Inquiry Sent!</h3>
              <p className="text-gray-500 text-sm mt-2">
                Thank you, <strong className="text-gray-800">{formData.contactName}</strong> from <strong className="text-gray-800">{formData.companyName}</strong>. Our enterprise team will email the custom rate schedule to <strong className="text-gray-800">{formData.workEmail}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Stripe, Airbnb"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Estimated Monthly Rentals
                  </label>
                  <select
                    value={formData.fleetNeeds}
                    onChange={(e) => setFormData({ ...formData, fleetNeeds: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue bg-white"
                  >
                    <option value="1-5 vehicles / month">1 - 5 vehicles / month</option>
                    <option value="5-15 vehicles / month">5 - 15 vehicles / month</option>
                    <option value="15-50 vehicles / month">15 - 50 vehicles / month</option>
                    <option value="50+ enterprise fleet">50+ Enterprise fleet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Specific Requirements or Preferred Vehicle Classes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Need executive SUVs in Seattle and EV sedans in Chicago..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors text-sm shadow-md"
              >
                Request Custom Corporate Proposal
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
