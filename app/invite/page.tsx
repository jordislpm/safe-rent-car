"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function InvitePage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "SAFERENT-JORDI50";
  const referralUrl = "https://saferentcar.com/join?ref=SAFERENT-JORDI50";

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Referral Rewards
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Give $50, Get $50 in Rental Credits
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Invite your friends, colleagues, and travel buddies. When they take their first ride with Safe Rent Car, you both receive $50 automatically.
        </p>
      </section>

      {/* Referral Card */}
      <section className="mt-12 padding-x max-width max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary-blue-100 text-primary-blue flex items-center justify-center text-3xl mx-auto mb-4 font-bold">
            🎁
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Personal Referral Link</h2>
          <p className="text-sm text-gray-500 mb-6">
            Share this link via chat, email, or social media to unlock your credits.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 mb-6">
            <input
              type="text"
              readOnly
              value={referralUrl}
              className="w-full bg-transparent px-4 py-2 text-xs md:text-sm font-mono text-gray-700 outline-none select-all"
            />
            <button
              type="button"
              onClick={handleCopy}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm shrink-0 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-primary-blue text-white hover:bg-blue-700"
              }`}
            >
              {copied ? "✓ Copied!" : "Copy Link"}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <span className="text-xs uppercase font-semibold text-gray-400 block mb-3">
              Share directly via
            </span>
            <div className="flex justify-center gap-3">
              <a
                href={`https://wa.me/?text=Get%20$50%20off%20your%20first%20car%20rental%20with%20Safe%20Rent%20Car!%20${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=Rent%20cars%20easily%20with%20@SafeRentCar%20and%20get%20$50%20credit:%20${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={`mailto:?subject=Here%20is%20$50%20for%20your%20next%20car%20rental&body=Check%20out%20Safe%20Rent%20Car%20using%20my%20link:%20${encodeURIComponent(referralUrl)}`}
                className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works 3 steps */}
      <section className="mt-20 padding-x max-width max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How the Referral Program Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-blue-100/40 rounded-3xl p-8 border border-blue-100 text-center">
            <span className="w-10 h-10 rounded-full bg-primary-blue text-white font-bold flex items-center justify-center mx-auto mb-4">
              1
            </span>
            <h3 className="font-bold text-gray-900 mb-2">Send Your Invite</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Copy your unique link and share it with friends, family, or your team.
            </p>
          </div>

          <div className="bg-primary-blue-100/40 rounded-3xl p-8 border border-blue-100 text-center">
            <span className="w-10 h-10 rounded-full bg-primary-blue text-white font-bold flex items-center justify-center mx-auto mb-4">
              2
            </span>
            <h3 className="font-bold text-gray-900 mb-2">Friend Completes Rental</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Your friend books any car from our catalogue and receives $50 discount applied at checkout.
            </p>
          </div>

          <div className="bg-primary-blue-100/40 rounded-3xl p-8 border border-blue-100 text-center">
            <span className="w-10 h-10 rounded-full bg-primary-blue text-white font-bold flex items-center justify-center mx-auto mb-4">
              3
            </span>
            <h3 className="font-bold text-gray-900 mb-2">You Get Credited</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Once their rental concludes, $50 in credits lands directly in your Safe Rent Car account with no expiration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
