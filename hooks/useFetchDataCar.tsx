import { useState, useEffect } from 'react';
import { fetchCarsApiNinja } from '@/utils/api_ninja_car';
import { CarProps, FetchCarState, FilterProps } from '@/types';
import { calculateCarRent } from '@/utils/calculate_car_rents';
import { generateCarImageUrl } from '@/utils/generate_car_img_url';

const useFetchDataCars = (filters: FilterProps): FetchCarState<CarProps[]> => {
    const [data, setData] = useState<CarProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Serializar dependencias para evitar re-renders por cambio de referencia de objeto
    const filterKey = JSON.stringify(filters);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchCarsApiNinja(filters);

                if (!isMounted) return;

                if (!Array.isArray(result)) {
                    setData([]);
                    return;
                }

                const resultMapped: CarProps[] = result.map((car: any) => {
                    const cityMpg = car.city_mpg || car.cityMPG || 25;
                    let carRent = calculateCarRent(cityMpg, car.year);

                    if (carRent === "undefined" || carRent === "NaN" || !carRent) {
                        carRent = (Math.floor(Math.random() * 50) + 50).toString();
                    }

                    const defaultImages = [
                        generateCarImageUrl(car),
                        generateCarImageUrl(car, "29"),
                        generateCarImageUrl(car, "33"),
                        generateCarImageUrl(car, "13")
                    ];

                    return {
                        ...car,
                        city_mpg: cityMpg,
                        class: car.class || "Sedan",
                        fuel_type: car.fuel_type || "gas",
                        drive: car.drive || "fwd",
                        transmission: car.transmission || "a",
                        carRent: car.carRent || carRent,
                        images: (car.images && car.images.length > 0) ? car.images : defaultImages,
                    };
                });

                setData(resultMapped);
            } catch (err) {
                if (isMounted) {
                    setError((err as Error).message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [filterKey]);

    return { data, loading, error };
};

export default useFetchDataCars;
