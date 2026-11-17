"use client";

import React, { useState } from "react";
import { CarCardProps } from "@/types";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import CarDetails from "../CarDetails/CarDetails";
import { useFavorites } from "@/hooks/useFavorites";

function CarCard({ car }: CarCardProps) {
  const { city_mpg, make, model, transmission, drive, carRent, images } = car;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgError, setImgError] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(car);

  const mainImage = imgError || !images?.[0] ? "/hero.png" : images[0];

  return (
    <div className="car-card group relative">
      {/* Botón de Favoritos */}
      <button
        type="button"
        onClick={() => toggleFavorite(car)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-transform active:scale-90"
        title={favorited ? "Remove from favorites" : "Add to favorites"}
      >
        <Image
          src={favorited ? "/heart-filled.svg" : "/heart-outline.svg"}
          alt="favorite"
          width={22}
          height={22}
        />
      </button>

      <div className="car-card__content pr-8">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold text-gray-900">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium text-gray-500 mb-1">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={mainImage}
          alt={`${make} ${model}`}
          fill
          priority={false}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive?.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View Details"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue hover:bg-blue-700 transition-colors"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
