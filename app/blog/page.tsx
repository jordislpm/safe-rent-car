"use client";

import React, { useState } from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "The Ultimate EV Road Trip: Planning Charging & Routes in 2024",
    excerpt: "Everything you need to know about taking a rented Tesla Model 3 or Model Y on a 1,000-mile road trip without range anxiety.",
    category: "Electric Vehicles",
    readTime: "6 min read",
    date: "July 18, 2024",
    author: "Elena Rostova",
    authorRole: "EV Specialist",
  },
  {
    id: 2,
    title: "Gas vs. Hybrid vs. Electric: Which Rental Saves You More Money?",
    excerpt: "We tracked 500 rentals across highway and city driving to find the exact breakeven point based on mileage, fuel prices, and rental tiers.",
    category: "Cost Guide",
    readTime: "8 min read",
    date: "June 29, 2024",
    author: "Marcus Chen",
    authorRole: "Automotive Analyst",
  },
  {
    id: 3,
    title: "Top 7 Scenic Highway Drives in North America for Car Enthusiasts",
    excerpt: "From California's Highway 1 to the Blue Ridge Parkway, discover the most exhilarating roads to take with your next weekend sports car.",
    category: "Travel Guides",
    readTime: "5 min read",
    date: "June 14, 2024",
    author: "Sophia Alvarez",
    authorRole: "Travel Editor",
  },
  {
    id: 4,
    title: "5 Vital Things to Inspect Before Driving Off with a Rental Car",
    excerpt: "A quick 3-minute walkaround checklist that protects your deposit and guarantees a smooth, worry-free return experience.",
    category: "Pro Tips",
    readTime: "4 min read",
    date: "May 28, 2024",
    author: "Jordi S.",
    authorRole: "Fleet Safety Director",
  },
  {
    id: 5,
    title: "Understanding Car Rental Insurance: CDW, SLI, and Personal Policies",
    excerpt: "Demystifying car rental insurance jargon so you never double-pay for coverage your personal insurance or credit card already provides.",
    category: "Insurance & Legal",
    readTime: "7 min read",
    date: "May 10, 2024",
    author: "David Miller",
    authorRole: "Insurance Specialist",
  },
  {
    id: 6,
    title: "How Connected Fleets and Telematics Are Transforming Safety",
    excerpt: "How real-time tire pressure monitors, automated crash alerts, and keyless mobile check-in are making car rental effortless.",
    category: "Technology",
    readTime: "5 min read",
    date: "April 22, 2024",
    author: "Marcus Chen",
    authorRole: "Automotive Analyst",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electric Vehicles", "Travel Guides", "Cost Guide", "Pro Tips", "Technology"];

  const filtered = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Safe Rent Magazine
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Automotive Insights & Travel Guides
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Expert tips, electric vehicle advice, and curated scenic routes written by our team of drivers and mechanics.
        </p>
      </section>

      {/* Category Pills */}
      <section className="mt-12 padding-x max-width">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mt-14 padding-x max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="px-3 py-1 bg-primary-blue-100 text-primary-blue rounded-full font-bold">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-primary-blue transition-colors cursor-pointer">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{article.author}</h4>
                  <p className="text-[11px] text-gray-500">{article.authorRole}</p>
                </div>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
