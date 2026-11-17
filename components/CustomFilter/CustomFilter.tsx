"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { useFilterSearch } from "@/hooks/useFiltersSearch";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const router = useRouter();
  const { filters, dispatch } = useFilterSearch();

  // Keep dropdown aligned with global filter context
  const currentVal = title === "fuel"
    ? (filters.fuel || "").toLowerCase()
    : title === "year"
    ? (filters.year ? filters.year.toString() : "")
    : "";

  const selected = options.find((opt) => opt.value.toLowerCase() === currentVal) || options[0];

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const val = e.value.toLowerCase();
    const newPathName = updateSearchParams(title, val);
    router.push(newPathName, { scroll: false });

    if (title === "fuel") {
      dispatch({ type: "SET_FUEL", payload: val });
      dispatch({ type: "SET_LIMIT", payload: 12 });
    } else if (title === "year") {
      const parsed = parseInt(val, 10);
      dispatch({ type: "SET_YEAR", payload: isNaN(parsed) ? undefined : parsed });
      dispatch({ type: "SET_LIMIT", payload: 12 });
    }
  };

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={handleUpdateParams}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate text-xs font-semibold text-gray-700">
              {selected.title}
            </span>
            <Image
              src="/chevron-up-down.svg"
              width={16}
              height={16}
              className="ml-3 object-contain"
              alt="chevron"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options scrollbar-thin scrollbar-thumb-gray-200">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 text-xs ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? "font-bold" : "font-normal"}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
