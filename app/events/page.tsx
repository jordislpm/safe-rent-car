"use client";

import React, { useState } from "react";
import Image from "next/image";

const eventsList = [
  {
    id: 1,
    title: "Pacific Coast Highway EV Rally 2024",
    date: "August 24, 2024",
    location: "Monterey to Big Sur, California",
    category: "Road Rally",
    badge: "Open Registration",
    spotsLeft: 8,
    image: "/hero.png",
    description:
      "Join fellow Safe Rent Car drivers for a scenic coastal convoy featuring Tesla, Porsche Taycan, and Audi e-tron models. Includes charging stops and scenic sunset dinner.",
  },
  {
    id: 2,
    title: "Supercar Track Day Experience",
    date: "September 15, 2024",
    location: "Thermal Club Circuit, Palm Springs",
    category: "Track Day",
    badge: "Exclusive",
    spotsLeft: 4,
    image: "/hero.png",
    description:
      "Professional driver coaching, hot laps, and high-performance safety sessions behind the wheel of BMW M-Series, Porsche 911, and Mustang GTs.",
  },
  {
    id: 3,
    title: "Safe Rent EcoMobility Summit",
    date: "October 12, 2024",
    location: "Metropolitan Pavilion, New York",
    category: "Expo & Tech",
    badge: "Free for Members",
    spotsLeft: 35,
    image: "/hero.png",
    description:
      "Showcasing the future of autonomous fleets, battery tech, and sustainable city rentals. Keynotes by leading automotive executives.",
  },
  {
    id: 4,
    title: "Alpine Winter Driving Clinic",
    date: "December 08, 2024",
    location: "Aspen Snowmass, Colorado",
    category: "Winter Driving",
    badge: "Coming Soon",
    spotsLeft: 12,
    image: "/hero.png",
    description:
      "Learn skid control, snow chain fitting, and AWD mountain handling on ice tracks with expert winter rally drivers.",
  },
];

export default function EventsPage() {
  const [registeredEvent, setRegisteredEvent] = useState<number | null>(null);

  const handleRegister = (id: number) => {
    setRegisteredEvent(id);
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Community & Experiences
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Automotive Events & Track Days
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          More than just car rentals. Connect with driving enthusiasts, test new models on world-class tracks, and join scenic road rallies.
        </p>
      </section>

      {/* Events List */}
      <section className="mt-16 padding-x max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsList.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-primary-blue-100/60 flex items-center justify-center p-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain p-4"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-blue font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {event.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-primary-blue text-white font-semibold text-xs px-3 py-1 rounded-full">
                    {event.badge}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1 font-semibold text-gray-800">
                      📅 {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium text-gray-600">
                      📍 {event.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{event.description}</p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-semibold text-gray-500">
                  ⚡ {event.spotsLeft} spots available
                </span>

                {registeredEvent === event.id ? (
                  <span className="px-5 py-2.5 rounded-full bg-green-100 text-green-700 font-bold text-xs flex items-center gap-1">
                    ✓ You are registered!
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRegister(event.id)}
                    className="px-6 py-2.5 rounded-full bg-primary-blue text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    RSVP / Book Spot
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
