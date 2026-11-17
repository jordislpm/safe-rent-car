import { FilterProps } from "@/types";

export async function fetchCarsApiNinja(filters: FilterProps) {
  const { manufacturer = "", year = "", model = "", limit = 10, fuel = "" } = filters;

  const params = new URLSearchParams({
    make: manufacturer,
    year: year ? year.toString() : "",
    model: model,
    limit: limit.toString(),
    fuel: fuel,
  });

  const response = await fetch(`/api/cars?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch cars: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}
