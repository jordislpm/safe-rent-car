"use client";

import { useState, useEffect } from "react";
import { CarProps } from "@/types";

export function getCarId(car: CarProps): string {
  return `${car.make}-${car.model}-${car.year}`.toLowerCase().replace(/\s+/g, "-");
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoriteCars, setFavoriteCars] = useState<CarProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("safe_rent_favorites");
      if (stored) {
        const parsed: CarProps[] = JSON.parse(stored);
        setFavoriteCars(parsed);
        setFavoriteIds(parsed.map(getCarId));
      }
    } catch (e) {
      console.error("Failed to load favorites from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleFavorite = (car: CarProps) => {
    const id = getCarId(car);
    const exists = favoriteIds.includes(id);

    let updatedCars: CarProps[];
    let updatedIds: string[];

    if (exists) {
      updatedCars = favoriteCars.filter((c) => getCarId(c) !== id);
      updatedIds = favoriteIds.filter((favId) => favId !== id);
    } else {
      updatedCars = [...favoriteCars, car];
      updatedIds = [...favoriteIds, id];
    }

    setFavoriteCars(updatedCars);
    setFavoriteIds(updatedIds);

    try {
      localStorage.setItem("safe_rent_favorites", JSON.stringify(updatedCars));
    } catch (e) {
      console.error("Failed to save favorites to localStorage", e);
    }
  };

  const isFavorite = (car: CarProps) => {
    return favoriteIds.includes(getCarId(car));
  };

  return { favoriteCars, isFavorite, toggleFavorite, isLoaded, favoriteCount: favoriteIds.length };
}
