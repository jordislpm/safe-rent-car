import { FilterProps } from "@/types";

export async function fetchCarsApiNinja(filters: FilterProps) {


    const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'X-RapidAPI-Key': '4ae447e7f9msh1c0e5c55f151089p19522bjsn54b3a9d88e49',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
        , { headers: headers });
    const result = await response.json()
    return result
}