"use client"

import React, { Fragment } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CustomFilter from '../CustomFilter/CustomFilter'
import useFetchDataCars from '@/hooks/useFetchDataCar'
import CarCard from '../CarCard/CarCard'

function PrincipalSection() {
    const { data, loading, error } = useFetchDataCars();


    console.log(data)
    return (
        <div
            className='mt-12 padding-x padding-y max-width'
            id="discover">
            <div className='home__text-container'>
                <h1 className='text-4x1'>Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className='home__filters'>
                <SearchBar />
                <div className='home__filter-container'>
                    <CustomFilter title="fuel" />
                    <CustomFilter title="year" />
                </div>
            </div>
            {data && <section>
                <div className='home__cars-wrapper'>
                    {data.map((car, index) => (
                        <Fragment key={`${index} ${car.model}`}>
                            <CarCard {...car} />
                        </Fragment>
                    ))}
                </div>
            </section>}
            {error &&
                <div className='home__error-container'>
                    <h2 className='text-black text-xl font-bold'>
                        Opps, no results
                    </h2>
                    <p>{error}</p>
                </div>}
        </div>
    )
}

export default PrincipalSection