"use client";

import React, { useState } from "react";
import Image from "next/image";

const episodes = [
  {
    id: 1,
    number: "EP 28",
    title: "Designing the Next Generation of Electric Muscle Cars",
    guest: "Carlos De Silva, Chief Aerodynamics Engineer",
    duration: "48 min",
    date: "July 2024",
    description: "Carlos joins us to discuss how synthetic engine acoustics, instant torque, and battery packaging are redefining what makes an American performance car emotional.",
  },
  {
    id: 2,
    number: "EP 27",
    title: "The Economics of Car Sharing vs. Ownership in Major Cities",
    guest: "Dr. Maya Lindqvist, Urban Mobility Researcher",
    duration: "42 min",
    date: "June 2024",
    description: "Why younger generations in urban hubs are ditching vehicle depreciation, insurance payments, and parking fees in favor of on-demand car rental.",
  },
  {
    id: 3,
    number: "EP 26",
    title: "Behind the Scenes of a 150-Point Fleet Inspection",
    guest: "Jordi S. & The Lead Maintenance Crew",
    duration: "35 min",
    date: "June 2024",
    description: "A deep dive into how modern connected fleets use OBD-II telematics, predictive tire wear analysis, and automated brake fluid testing to keep drivers safe.",
  },
  {
    id: 4,
    number: "EP 25",
    title: "From Coast to Coast: The 48-Hour Cross-Country Cannonball Run",
    guest: "Alex Rivera, Endurance Rally Driver",
    duration: "55 min",
    date: "May 2024",
    description: "Rally veteran Alex Rivera shares crazy stories, laser radar detectors, auxiliary fuel tanks, and weather planning across America's interstate corridors.",
  },
];

export default function PodcastPage() {
  const [playingId, setPlayingId] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentEpisode = episodes.find((e) => e.id === playingId) || episodes[0];

  const togglePlay = (id: number) => {
    if (playingId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingId(id);
      setIsPlaying(true);
    }
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="padding-x max-width text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue-100 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
          Safe Drive Audio
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The Safe Drive Podcast
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          Conversations with automotive engineers, designers, road rally racers, and leaders building the future of mobility.
        </p>
      </section>

      {/* Featured Player Widget */}
      <section className="mt-12 padding-x max-width max-w-4xl mx-auto">
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-primary-blue hover:bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg transition-transform active:scale-95"
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {isPlaying ? "Now Playing" : "Featured Episode"} • {currentEpisode.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold mt-1 text-white">
                  {currentEpisode.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{currentEpisode.guest}</p>
              </div>
            </div>

            <div className="text-right text-xs text-gray-400 hidden md:block">
              <span className="block font-semibold text-white">{currentEpisode.duration}</span>
              <span>Available on Spotify & Apple</span>
            </div>
          </div>

          {/* Progress bar simulation */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div className={`h-full bg-primary-blue transition-all duration-300 ${isPlaying ? "w-1/3" : "w-0"}`} />
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 mt-2">
              <span>{isPlaying ? "14:20" : "0:00"}</span>
              <span>{currentEpisode.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive */}
      <section className="mt-16 padding-x max-width max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Episodes</h2>

        <div className="space-y-4">
          {episodes.map((ep) => {
            const isThisPlaying = playingId === ep.id && isPlaying;

            return (
              <div
                key={ep.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-1">
                    <span className="font-bold text-primary-blue">{ep.number}</span>
                    <span>•</span>
                    <span>{ep.date}</span>
                    <span>•</span>
                    <span>{ep.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{ep.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 font-medium">Guest: {ep.guest}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{ep.description}</p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => togglePlay(ep.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                      isThisPlaying
                        ? "bg-primary-blue text-white"
                        : "bg-primary-blue-100 text-primary-blue hover:bg-blue-100"
                    }`}
                  >
                    <span>{isThisPlaying ? "❚❚ Pause" : "▶ Play Episode"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
