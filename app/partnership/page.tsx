"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";

const partnerTiers = [
  {
    title: "Host & Fleet Owners",
    subtitle: "Monetize your vehicle collection",
    description:
      "Turn your luxury, sports, or family vehicles into passive income. We manage verification, guest vetting, full insurance, and scheduled maintenance.",
    earning: "Up to $1,800 / mo per car",
    badge: "Most Popular",
    perks: [
      "Full $1M liability & collision coverage",
      "Automated monthly bank direct deposits",
      "Remote telematics & GPS security tracking",
      "No long-term contracts; withdraw anytime",
    ],
  },
  {
    title: "Travel Agencies & Hotels",
    subtitle: "Deliver seamless mobility to your guests",
    description:
      "Integrate Safe Rent Car into your concierge desks, hotel apps, or tour packages. Offer your guests exclusive discounts while earning high commissions.",
    earning: "15% - 20% commission per booking",
    badge: "B2B Program",
    perks: [
      "White-label API & affiliate widget",
      "Priority VIP car delivery to hotel lobbies",
      "Dedicated corporate booking manager",
      "Custom monthly billing & invoicing",
    ],
  },
  {
    title: "Creators & Automotive Affiliates",
    subtitle: "Share the ride with your audience",
    description:
      "Are you a travel creator, car reviewer, or lifestyle influencer? Partner with us for sponsored road trips, custom promo codes, and generous revenue sharing.",
    earning: "Up to $75 per referral",
    badge: "Affiliate",
    perks: [
      "Free vehicle access for verified media shoots",
      "Unique discount promo code for followers",
      "Live tracking dashboard for earnings",
      "Quarterly performance bonuses",
    ],
  },
];

export default function PartnershipPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tier: "Host & Fleet Owners",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Partnership Programs
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Grow Your Business with Safe Rent Car
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Whether you have a fleet of vehicles to list or want to offer premium car rental options to your travel clients, we have a tailored partnership model for you.
        </p>
      </section>

      {/* Tiers Grid */}
      <section className="mt-16 padding-x max-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-primary-blue-100/40 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl p-8 border border-blue-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-white text-primary-blue rounded-full shadow-sm">
                    {tier.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">Tier 0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{tier.title}</h3>
                <p className="text-xs font-semibold text-primary-blue mt-1 mb-3">{tier.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{tier.description}</p>

                <div className="bg-white rounded-2xl p-4 mb-6 border border-blue-50">
                  <span className="text-xs text-gray-500 uppercase font-semibold block">Estimated Earnings</span>
                  <span className="text-lg font-extrabold text-gray-900">{tier.earning}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-700">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-blue-100">
                <a
                  href="#apply"
                  className="block text-center w-full py-3 rounded-full bg-primary-blue text-white font-bold text-sm hover:bg-blue-700 transition-colors"
                >
                  Apply for this Tier
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="mt-20 padding-x max-width max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Partner Application</h2>
            <p className="text-sm text-gray-500 mt-2">
              Tell us about your company or fleet and our partnership team will reach out within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Application Received!</h3>
              <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                Thank you for your interest, <strong className="text-gray-800">{formData.name || "Partner"}</strong>. Our business development team has sent a confirmation package to <strong className="text-gray-800">{formData.email || "your email"}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Full Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Acme Mobility Group"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="partner@company.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue bg-white"
                >
                  <option value="Host & Fleet Owners">Host & Fleet Owners</option>
                  <option value="Travel Agencies & Hotels">Travel Agencies & Hotels</option>
                  <option value="Creators & Automotive Affiliates">Creators & Automotive Affiliates</option>
                  <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Message / Fleet Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the number of vehicles, city location, or project scope..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors text-sm shadow-md"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
