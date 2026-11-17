"use client";

import React, { Fragment, useState } from "react";
import { CarDetailsProps } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import BookingModal from "../BookingModal/BookingModal";

function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [imgErrorIndex, setImgErrorIndex] = useState<{ [key: number]: boolean }>({});

  const details = Object.fromEntries(
    Object.entries(car).filter(
      ([key]) => key !== "carRent" && key !== "images" && key !== "cityMPG"
    )
  );

  const getImageSrc = (index: number) => {
    if (imgErrorIndex[index] || !car.images?.[index]) {
      return "/hero.png";
    }
    return car.images[index];
  };

  const handleImageError = (index: number) => {
    setImgErrorIndex((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-2xl transition-all flex flex-col gap-5 scrollbar-thin scrollbar-thumb-gray-300">
                  <button
                    type="button"
                    className="absolute top-3 right-3 z-10 w-fit p-2 bg-primary-blue-100 hover:bg-blue-100 rounded-full transition-colors"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-44 bg-pattern bg-cover bg-center rounded-xl overflow-hidden shadow-inner">
                      <Image
                        src={getImageSrc(0)}
                        alt={car.model}
                        fill
                        priority
                        className="object-contain p-2"
                        onError={() => handleImageError(0)}
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg overflow-hidden">
                        <Image
                          src={getImageSrc(1)}
                          alt={`${car.model} angle 1`}
                          fill
                          className="object-contain p-1"
                          onError={() => handleImageError(1)}
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg overflow-hidden">
                        <Image
                          src={getImageSrc(2)}
                          alt={`${car.model} angle 2`}
                          fill
                          className="object-contain p-1"
                          onError={() => handleImageError(2)}
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg overflow-hidden">
                        <Image
                          src={getImageSrc(3)}
                          alt={`${car.model} angle 3`}
                          fill
                          className="object-contain p-1"
                          onError={() => handleImageError(3)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <h2 className="font-bold text-2xl capitalize text-gray-900">
                        {car.make} {car.model}
                      </h2>
                      <span className="text-xl font-extrabold text-primary-blue">
                        ${car.carRent} <span className="text-xs text-gray-500 font-normal">/day</span>
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {Object.entries(details).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-5 w-full text-right py-1.5 border-b border-gray-100 last:border-b-0"
                        >
                          <h4 className="text-gray-500 text-sm capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-gray-900 text-sm font-semibold capitalize">
                            {String(value)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsBookingOpen(true)}
                        className="w-full py-3.5 px-6 rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-[0.99]"
                      >
                        Rent This Car Now
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <BookingModal
        isOpen={isBookingOpen}
        closeModal={() => setIsBookingOpen(false)}
        car={car}
      />
    </>
  );
}

export default CarDetails;
