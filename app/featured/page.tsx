import React from "react";
import Link from "next/link";
import { mockCarsList } from "@/constants/mockCars";
import CarCard from "@/components/CarCard/CarCard";
import CustomButton from "@/components/CustomButton/CustomButton";

export const metadata = {
  title: "Featured Vehicles | Safe Rent Car",
  description: "Explore our handpicked selection of top-performing, fuel-efficient, and luxury cars.",
};

export default function FeaturedPage() {
  // Select top highlight cars
  const featuredCars = mockCarsList.slice(0, 8);

  const stats = [
    { label: "Verified Vehicles", value: "500+" },
    { label: "Customer Satisfaction", value: "4.9 / 5" },
    { label: "Roadside Assistance", value: "24 / 7" },
    { label: "Hidden Fees", value: "$0" },
  ];

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Curated Fleet
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Featured Vehicles of the Month
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Each model is inspected against a 150-point checklist for mechanical excellence, cleanliness, and safety before leaving our bay.
        </p>
      </section>

      {/* Stats Counter */}
      <section className="mt-12 padding-x max-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-primary-blue-100/60 rounded-3xl p-6 md:p-8 border border-blue-100">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center p-3">
              <span className="text-3xl md:text-4xl font-extrabold text-primary-blue block mb-1">
                {s.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-600">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="mt-14 padding-x max-width">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Top Recommended</h2>
            <p className="text-sm text-gray-500">Popular selections chosen by our drivers this week</p>
          </div>
          <Link href="/#discover" className="text-sm font-semibold text-primary-blue hover:underline">
            View All Catalogue &rarr;
          </Link>
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
          {featuredCars.map((car, index) => (
            <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 padding-x max-width text-center">
        <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Looking for a specific model or custom fleet?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Search our complete collection of sedans, SUVs, trucks, and performance sports cars with instant availability.
          </p>
          <Link href="/#discover">
            <CustomButton
              title="Search All Inventory"
              containerStyles="bg-primary-blue text-white rounded-full py-3.5 px-8 font-bold hover:bg-blue-600"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
