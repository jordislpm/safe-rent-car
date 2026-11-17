"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface AuthModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

export default function AuthModal({ isOpen, closeModal, onLoginSuccess }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = email ? email.split("@")[0] : "Demo Driver";
    onLoginSuccess({
      name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email: email || "driver@saferentcar.com",
    });
    closeModal();
  };

  const handleDemoLogin = () => {
    onLoginSuccess({
      name: "Alex Hunter (Demo)",
      email: "alex.hunter@saferentcar.com",
    });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-2xl transition-all">
                <button
                  type="button"
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  onClick={closeModal}
                >
                  <Image src="/close.svg" alt="close" width={16} height={16} />
                </button>

                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-primary-blue-100 rounded-2xl mb-3">
                    <Image src="/car-logo.svg" alt="Safe Rent" width={32} height={32} />
                  </div>
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    {isSignUp ? "Create an Account" : "Welcome Back"}
                  </Dialog.Title>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage your car rentals, saved favorites and booking history.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-md text-sm"
                  >
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </button>
                </form>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400">Or quickly test</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="w-full py-2.5 border border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <span>⚡ 1-Click Demo Login</span>
                </button>

                <div className="mt-5 text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-xs text-primary-blue font-semibold hover:underline"
                  >
                    {isSignUp
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Create one"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
