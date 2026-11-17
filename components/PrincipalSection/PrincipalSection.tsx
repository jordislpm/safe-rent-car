"use client";

import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CustomFilter from "../CustomFilter/CustomFilter";
import useFetchDataCars from "@/hooks/useFetchDataCar";
import CarCard from "../CarCard/CarCard";
import CarCardSkeleton from "../CarCardSkeleton/CarCardSkeleton";
import { useFilterSearch } from "@/hooks/useFiltersSearch";
import { useFavorites } from "@/hooks/useFavorites";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "../ShowMore/ShowMore";
import { useRouter } from "next/navigation";

const quickCategories = [
  { label: "✨ All Fleet", type: "ALL", value: "" },
  { label: "⚡ 100% Electric", type: "FUEL", value: "electricity" },
  { label: "🚙 SUVs & Family", type: "MODEL", value: "suv" },
  { label: "🏎️ Sports & Sedans", type: "MODEL", value: "sedan" },
  { label: "⛽ Fuel Efficient", type: "FUEL", value: "gas" },
];

function PrincipalSection() {
  const { filters, dispatch } = useFilterSearch();
  const { data, loading, error } = useFetchDataCars(filters);
  const { favoriteCars, favoriteCount } = useFavorites();
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  const router = useRouter();

  const displayedCars = activeTab === "favorites" ? favoriteCars : (data || []);

  const handleQuickCategory = (item: typeof quickCategories[0]) => {
    if (item.type === "ALL") {
      dispatch({ type: "RESET_FILTERS" });
      router.push(window.location.pathname, { scroll: false });
    } else if (item.type === "FUEL") {
      dispatch({ type: "SET_FUEL", payload: item.value });
      dispatch({ type: "SET_MODEL", payload: "" });
    } else if (item.type === "MODEL") {
      dispatch({ type: "SET_MODEL", payload: item.value });
    }
  };

  const removeFilter = (key: "manufacturer" | "model" | "fuel" | "year") => {
    if (key === "manufacturer") dispatch({ type: "SET_MANUFACTURER", payload: "" });
    if (key === "model") dispatch({ type: "SET_MODEL", payload: "" });
    if (key === "fuel") dispatch({ type: "SET_FUEL", payload: "" });
    if (key === "year") dispatch({ type: "SET_YEAR", payload: undefined });
  };

  const clearAllFilters = () => {
    dispatch({ type: "RESET_FILTERS" });
    router.push(window.location.pathname, { scroll: false });
  };

  const hasActiveFilters = Boolean(
    filters.manufacturer || filters.model || filters.fuel || filters.year
  );

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      {/* Top Heading & Favorites Tab Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-gray-900">Car Catalogue</h1>
          <p className="text-gray-500">Explore, search and rent vehicles with instant confirmation</p>
        </div>

        {/* Tab switch: All Cars vs Favorites */}
        <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-full w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-primary-blue text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Cars
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("favorites")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === "favorites"
                ? "bg-primary-blue text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <span>Favorites</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === "favorites"
                  ? "bg-white text-primary-blue font-bold"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {favoriteCount}
            </span>
          </button>
        </div>
      </div>

      {activeTab === "all" && (
        <div className="space-y-4 mb-8">
          {/* Quick Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">
              Quick:
            </span>
            {quickCategories.map((cat, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleQuickCategory(cat)}
                className="shrink-0 px-4 py-1.5 rounded-full border border-gray-200 bg-white hover:border-primary-blue hover:text-primary-blue text-xs font-semibold text-gray-700 transition-colors shadow-2xs"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* SearchBar + Fuel & Year Selectors */}
          <div className="home__filters mt-2 flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            <SearchBar />
            <div className="home__filter-container flex items-center gap-2">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-gray-400">Active filters:</span>

              {filters.manufacturer && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-medium border border-blue-200">
                  Brand: <strong className="capitalize">{filters.manufacturer}</strong>
                  <button
                    type="button"
                    onClick={() => removeFilter("manufacturer")}
                    className="hover:text-red-500 font-bold ml-1 text-sm"
                  >
                    ✕
                  </button>
                </span>
              )}

              {filters.model && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-medium border border-blue-200">
                  Model: <strong className="capitalize">{filters.model}</strong>
                  <button
                    type="button"
                    onClick={() => removeFilter("model")}
                    className="hover:text-red-500 font-bold ml-1 text-sm"
                  >
                    ✕
                  </button>
                </span>
              )}

              {filters.fuel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-medium border border-blue-200">
                  Fuel: <strong className="capitalize">{filters.fuel}</strong>
                  <button
                    type="button"
                    onClick={() => removeFilter("fuel")}
                    className="hover:text-red-500 font-bold ml-1 text-sm"
                  >
                    ✕
                  </button>
                </span>
              )}

              {filters.year && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-xs font-medium border border-blue-200">
                  Year: <strong>{filters.year}</strong>
                  <button
                    type="button"
                    onClick={() => removeFilter("year")}
                    className="hover:text-red-500 font-bold ml-1 text-sm"
                  >
                    ✕
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-red-500 hover:text-red-700 font-semibold underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Vehicles Container with min-height to prevent scroll jumping */}
      <div className="min-h-[450px]">
        {/* Loading Skeletons */}
        {loading && activeTab === "all" && (
          <div className="home__cars-wrapper">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Cars Grid */}
        {(!loading || activeTab === "favorites") && displayedCars.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-gray-500">
                Showing {displayedCars.length} {displayedCars.length === 1 ? "car" : "cars"} available
              </span>
            </div>

            <div className="home__cars-wrapper">
              {displayedCars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>

            {activeTab === "all" && filters.limit && (
              <ShowMore
                pageNumber={filters.limit / 10}
                isNext={filters.limit > displayedCars.length}
              />
            )}
          </section>
        )}

        {/* Empty State */}
        {(!loading || activeTab === "favorites") && displayedCars.length === 0 && (
          <div className="home__error-container py-12 text-center bg-gray-50/60 rounded-3xl border border-gray-100 p-8">
            <div className="text-4xl mb-3">🔍</div>
            <h2 className="text-black text-xl font-bold">
              {activeTab === "favorites"
                ? "No saved favorites yet"
                : "Oops, no vehicles found"}
            </h2>
            <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">
              {activeTab === "favorites"
                ? "Click on the heart icon on any vehicle card to save it here for fast comparison."
                : (error || "Try clearing some filters, selecting 'All Manufacturers', or searching for another keyword.")}
            </p>

            {hasActiveFilters && activeTab === "all" && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="mt-6 px-6 py-2.5 rounded-full bg-primary-blue text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Reset Filters & Show All Cars
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PrincipalSection;
