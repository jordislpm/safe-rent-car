"use client";

import React, { useState, useEffect } from "react";
import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFilterSearch } from "@/hooks/useFiltersSearch";

function SearchBar() {
  const { filters, dispatch } = useFilterSearch();
  const [manufacturer, setManufacturer] = useState<string>(filters.manufacturer || "");
  const [model, setModel] = useState<string>(filters.model || "");
  const router = useRouter();

  // Sync internal input state when context changes
  useEffect(() => {
    setManufacturer(filters.manufacturer || "");
    setModel(filters.model || "");
  }, [filters.manufacturer, filters.model]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeSearch(model.trim().toLowerCase(), manufacturer.trim().toLowerCase());
  };

  const executeSearch = (targetModel: string, targetManufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (targetModel) {
      searchParams.set("model", targetModel);
      dispatch({ type: "SET_MODEL", payload: targetModel });
    } else {
      searchParams.delete("model");
      dispatch({ type: "SET_MODEL", payload: "" });
    }

    if (targetManufacturer) {
      searchParams.set("manufacturer", targetManufacturer);
      dispatch({ type: "SET_MANUFACTURER", payload: targetManufacturer });
    } else {
      searchParams.delete("manufacturer");
      dispatch({ type: "SET_MANUFACTURER", payload: "" });
    }

    dispatch({ type: "SET_LIMIT", payload: 12 });
    searchParams.set("limit", "12");

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  };

  const handleClearAll = () => {
    setManufacturer("");
    setModel("");
    dispatch({ type: "RESET_FILTERS" });
    router.push(window.location.pathname, { scroll: false });
  };

  const hasSearchInput = Boolean(manufacturer || model);

  return (
    <form className="searchbar shadow-sm rounded-full bg-white border border-gray-200 p-1 flex-1" onSubmit={handleSearch}>
      {/* Manufacturer Combobox */}
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>

      {/* Model Input */}
      <div className="searchbar__item relative">
        <Image
          src="/model-icon.png"
          width={20}
          height={20}
          className="absolute w-[20px] h-[20px] ml-4 object-contain"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model (e.g. Corolla, Golf, 3 Series)..."
          className="searchbar__input pr-8"
        />
        {model && (
          <button
            type="button"
            onClick={() => setModel("")}
            className="absolute right-3 text-gray-400 hover:text-gray-600 text-xs p-1"
            title="Clear model"
          >
            ✕
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1 pr-1.5 shrink-0">
        {hasSearchInput && (
          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs text-gray-400 hover:text-gray-600 px-3 py-2 font-medium"
            title="Reset Search"
          >
            Clear
          </button>
        )}

        <button
          type="submit"
          className="bg-primary-blue hover:bg-blue-700 text-white font-semibold text-xs py-3 px-6 rounded-full flex items-center gap-2 transition-all shadow-sm active:scale-95"
        >
          <Image
            src="/magnifying-glass.svg"
            alt="search"
            width={16}
            height={16}
            className="brightness-0 invert object-contain"
          />
          <span>Find Cars</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
