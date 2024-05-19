import { useState, useEffect } from 'react';
import { fetchCarsApiNinja } from '@/utils/api_ninja_car';
import { CarProps, FetchCarState, FilterProps } from '@/types';
import { calculateCarRent } from '@/utils/calculate_car_rents';
import { generateCarImageUrl } from '@/utils/generate_car_img_url';



const useFetchDataCars = (filters: FilterProps): FetchCarState<CarProps[]> => {
    const [data, setData] = useState<CarProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        


        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchCarsApiNinja(filters);

                const resultMapped = result.map((car: any) => {

                    let carRent = calculateCarRent(car.cityMPG, car.year);

                    if (carRent === "undefined" || carRent === "NaN"){
                    carRent = (Math.floor(Math.random() * 101) + 50).toString()
                    }

                    const images = [
                        generateCarImageUrl(car),
                        generateCarImageUrl(car, "29"),
                        generateCarImageUrl(car, "33"),
                        generateCarImageUrl(car, "13")
                     ]

                    return {
                        model: car.model,
                        make: car.make,
                        mpg: car.mpg,
                        transmission: car.transmission,
                        year: car.year,
                        drive: car.drive,
                        cityMPG: car.cityMPG,
                        carRent: carRent,
                        images: images,
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
        console.log("filters:"+ filters);
    }, [filters]);

    return { data, loading, error };
};

export default useFetchDataCars;