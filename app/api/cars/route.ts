import { NextResponse } from "next/server";
import { mockCarsList } from "@/constants/mockCars";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const manufacturer = searchParams.get("make") || searchParams.get("manufacturer") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";
  const fuel = searchParams.get("fuel") || searchParams.get("fuel_type") || "";
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const apiKey = process.env.RAPIDAPI_KEY || "4ae447e7f9msh1c0e5c55f151089p19522bjsn54b3a9d88e49";

  try {
    const queryParams = new URLSearchParams();
    if (manufacturer) queryParams.set("make", manufacturer);
    if (model) queryParams.set("model", model);
    if (year) queryParams.set("year", year);
    if (fuel) queryParams.set("fuel_type", fuel);
    queryParams.set("limit", limit.toString());

    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${queryParams.toString()}`,
      {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
        next: { revalidate: 3600 },
      }
    );

    if (response.ok) {
      const result = await response.json();
      if (Array.isArray(result) && result.length > 0) {
        return NextResponse.json(result);
      }
    }
  } catch (error) {
    console.warn("Failed to fetch from external API Ninjas, falling back to mock cars:", error);
  }

  // Fallback a mock data si la API falla, no responde o no encuentra resultados
  let filtered = [...mockCarsList];

  if (manufacturer) {
    filtered = filtered.filter((car) =>
      car.make.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  if (model) {
    filtered = filtered.filter((car) =>
      car.model.toLowerCase().includes(model.toLowerCase())
    );
  }

  if (year) {
    const numYear = parseInt(year, 10);
    if (!isNaN(numYear)) {
      filtered = filtered.filter((car) => car.year === numYear);
    }
  }

  if (fuel) {
    filtered = filtered.filter(
      (car) => car.fuel_type.toLowerCase() === fuel.toLowerCase()
    );
  }

  return NextResponse.json(filtered.slice(0, limit));
}
