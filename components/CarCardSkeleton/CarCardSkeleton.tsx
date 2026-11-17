import React from "react";

export default function CarCardSkeleton() {
  return (
    <div className="car-card animate-pulse">
      <div className="car-card__content">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      </div>
      <div className="h-8 bg-gray-200 rounded w-1/3 my-2"></div>
      <div className="relative w-full h-40 my-3 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="w-24 h-16 bg-gray-200 rounded"></div>
      </div>
      <div className="flex w-full justify-between mt-2 pt-2 border-t border-gray-100">
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-12 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-12 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="mt-4 w-full h-10 bg-gray-200 rounded-full"></div>
    </div>
  );
}
