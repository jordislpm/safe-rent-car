"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "../CustomButton/CustomButton";

interface BookingModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export default function BookingModal({ isOpen, closeModal, car }: BookingModalProps) {
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const future = new Date();
    future.setDate(future.getDate() + 4);
    return future.toISOString().split("T")[0];
  });
  const [pickupLocation, setPickupLocation] = useState("Downtown Central Office");
  const [insurance, setInsurance] = useState(true);
  const [gps, setGps] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  // Calcular días
  const start = new Date(pickupDate).getTime();
  const end = new Date(returnDate).getTime();
  const diffDays = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));

  const basePricePerDay = parseInt(car.carRent || "60", 10);
  const insurancePerDay = insurance ? 15 : 0;
  const gpsPerDay = gps ? 5 : 0;
  const totalPerDay = basePricePerDay + insurancePerDay + gpsPerDay;
  const totalAmount = totalPerDay * diffDays;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingCode = `SAFE-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(bookingCode);
  };

  const handleClose = () => {
    setConfirmedBookingId(null);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
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
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-2xl transition-all">
                <button
                  type="button"
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  onClick={handleClose}
                >
                  <Image src="/close.svg" alt="close" width={16} height={16} />
                </button>

                {confirmedBookingId ? (
                  <div className="py-6 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4 font-bold">
                      ✓
                    </div>
                    <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                      Booking Confirmed!
                    </Dialog.Title>
                    <p className="text-gray-500 mt-2 text-sm">
                      Your reservation code is:{" "}
                      <span className="font-mono font-bold text-primary-blue text-base">
                        {confirmedBookingId}
                      </span>
                    </p>

                    <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 my-5 text-left text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Vehicle:</span>
                        <span className="font-semibold text-gray-900">
                          {car.make} {car.model} ({car.year})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-900">
                          {diffDays} days ({pickupDate} to {returnDate})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-semibold text-gray-900">{pickupLocation}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-base text-gray-900">
                        <span>Total Paid:</span>
                        <span className="text-primary-blue">${totalAmount}</span>
                      </div>
                    </div>

                    <CustomButton
                      title="Done"
                      containerStyles="w-full bg-primary-blue text-white rounded-full py-3"
                      handleClick={handleClose}
                    />
                  </div>
                ) : (
                  <div>
                    <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 mb-1">
                      Reserve {car.make} {car.model}
                    </Dialog.Title>
                    <p className="text-sm text-gray-500 mb-6">
                      Customize your dates and optional add-ons to complete the reservation.
                    </p>

                    <form onSubmit={handleConfirm} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                          Pickup Location
                        </label>
                        <select
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        >
                          <option value="Downtown Central Office">Downtown Central Office</option>
                          <option value="International Airport Terminal 1">International Airport Terminal 1</option>
                          <option value="International Airport Terminal 2">International Airport Terminal 2</option>
                          <option value="North Station Express">North Station Express</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                            Pickup Date
                          </label>
                          <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                            Return Date
                          </label>
                          <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            min={pickupDate}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase">
                          Optional Add-ons
                        </label>
                        <label className="flex items-center justify-between p-3 border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-700 flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={insurance}
                              onChange={(e) => setInsurance(e.target.checked)}
                              className="rounded text-primary-blue focus:ring-primary-blue h-4 w-4"
                            />
                            Full Protection Insurance
                          </span>
                          <span className="text-xs font-semibold text-gray-500">+$15/day</span>
                        </label>

                        <label className="flex items-center justify-between p-3 border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-700 flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={gps}
                              onChange={(e) => setGps(e.target.checked)}
                              className="rounded text-primary-blue focus:ring-primary-blue h-4 w-4"
                            />
                            GPS Navigation System
                          </span>
                          <span className="text-xs font-semibold text-gray-500">+$5/day</span>
                        </label>
                      </div>

                      {/* Pricing Summary */}
                      <div className="bg-primary-blue-100/50 rounded-xl p-4 mt-4 space-y-1.5 text-sm">
                        <div className="flex justify-between text-gray-600">
                          <span>
                            Daily Rate ({diffDays} {diffDays === 1 ? "day" : "days"}):
                          </span>
                          <span>${basePricePerDay * diffDays}</span>
                        </div>
                        {(insurance || gps) && (
                          <div className="flex justify-between text-gray-600">
                            <span>Add-ons total:</span>
                            <span>${(insurancePerDay + gpsPerDay) * diffDays}</span>
                          </div>
                        )}
                        <div className="border-t border-blue-200 pt-2 flex justify-between font-bold text-gray-900 text-base">
                          <span>Estimated Total:</span>
                          <span className="text-primary-blue font-extrabold">${totalAmount}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3 px-6 rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-md"
                        >
                          Confirm & Book for ${totalAmount}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
