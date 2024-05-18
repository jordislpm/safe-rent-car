import { useState, useEffect } from 'react';
import { fetchCarsApiNinja } from '@/utils/api_ninja_car';

interface Car {
    make: string;
    model: string;
    year: number;
}

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetchDataCars = (): FetchState<Car[]> => {
    const [data, setData] = useState<Car[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchCarsApiNinja();
                setData(result);
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