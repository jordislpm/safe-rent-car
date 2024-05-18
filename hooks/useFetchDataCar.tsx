import { useState, useEffect } from 'react';
import { fetchCarsApiNinja } from '@/utils/api_ninja_car';
import { CarCardProps, FetchCarState } from '@/types';
import { calculateCarRent } from '@/utils/calculate_car_rents';
calculateCarRent



const useFetchDataCars = (): FetchCarState<CarCardProps[]> => {
    const [data, setData] = useState<CarCardProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchCarsApiNinja();

                const resultMapped = result.map((car: any) => {

                    const carRent = calculateCarRent(car.cityMPG, car.year);
                    return {
                        model: car.model,
                        make: car.make,
                        mpg: car.mpg,
                        transmission: car.transmission,
                        year: car.year,
                        drive: car.drive,
                        cityMPG: car.cityMPG,
                        carRent: carRent,
                    }
                });

                setData(resultMapped);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetchDataCars;