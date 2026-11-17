"use client";

import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { manufacturers } from "@/constants";

function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setQuery] = useState<string>("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox
        value={manufacturer}
        onChange={(val: string | null) => {
          setManufacturer(val || "");
        }}
      >
        <div className="relative w-full">
          {/* Logo icon button */}
          <Combobox.Button className="absolute top-[14px] z-10">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="car logo"
            />
          </Combobox.Button>

          {/* Combobox input */}
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Manufacturer (All brands)..."
          />

          {/* Clear manufacturer button if selected */}
          {manufacturer && (
            <button
              type="button"
              onClick={() => {
                setManufacturer("");
                setQuery("");
              }}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xs p-1"
              title="Clear brand"
            >
              ✕
            </button>
          )}

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar-thin scrollbar-thumb-gray-200"
            >
              {/* Option to clear and view all */}
              <Combobox.Option
                value=""
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 text-xs font-semibold ${
                    active ? "bg-primary-blue text-white" : "text-gray-500 bg-gray-50"
                  }`
                }
              >
                ✨ All Manufacturers
              </Combobox.Option>

              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 text-xs ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-bold" : "font-normal"}`}>
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-primary-blue"
                          }`}
                        >
                          ✓
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
