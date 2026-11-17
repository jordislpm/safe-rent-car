"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import AuthModal from "../AuthModal/AuthModal";

interface UserProfile {
  name: string;
  email: string;
}

function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("safe_rent_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    try {
      localStorage.setItem("safe_rent_user", JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem("safe_rent_user");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="w-full absolute z-20">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo-safe.svg"
            alt="logo_safe-rent-car"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-100 shadow-sm text-sm font-semibold text-gray-700">
          <Link href="/#discover" className="hover:text-primary-blue transition-colors">
            Catalogue
          </Link>
          <Link href="/featured" className="hover:text-primary-blue transition-colors">
            Featured
          </Link>
          <Link href="/how-it-works" className="hover:text-primary-blue transition-colors">
            How It Works
          </Link>
          <Link href="/blog" className="hover:text-primary-blue transition-colors">
            Magazine
          </Link>
        </div>

        {/* User / Sign In */}
        {user ? (
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-semibold text-gray-800 hidden sm:inline">
              {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-red-500 hover:text-red-700 font-semibold ml-2 hover:underline"
            >
              Log out
            </button>
          </div>
        ) : (
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] shadow-sm hover:shadow transition-shadow"
            handleClick={() => setIsAuthOpen(true)}
          />
        )}
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        closeModal={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
}

export default Header;
