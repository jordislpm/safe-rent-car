"use client"

import React, { Fragment, useMemo } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CustomFilter from '../CustomFilter/CustomFilter'
import useFetchDataCars from '@/hooks/useFetchDataCar'
import CarCard from '../CarCard/CarCard'
import { useFilterSearch } from '@/hooks/useFiltersSearch'


import { fuels, yearsOfProduction } from '@/constants'
import { PrincipalSectionProps } from '@/types'
import ShowMore from '../ShowMore/ShowMore'
import Image from 'next/image'

function PrincipalSection() {

    const { filters, dispatch } = useFilterSearch();
   
    const { data, loading, error } = useFetchDataCars(filters);

    console.log(data)
    console.log(filters)
    return (
        <div
            className='mt-12 padding-x padding-y max-width'
            id="discover">
            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className='home__filters'>
                <SearchBar />
                <div className='home__filter-container'>
                    <CustomFilter title="fuel" options={fuels} />
                    <CustomFilter title="year" options={yearsOfProduction} />
                </div>
            </div>
            {data &&<> <section>
                <div className='home__cars-wrapper'>
                    {data.map((car, index) => (
                        <Fragment key={`${index} ${car.model}`}>
                            <CarCard car={car} />
                        </Fragment>
                    ))}
                </div>

             { filters.limit &&  <ShowMore 
              pageNumber={filters.limit / 10}
              isNext={filters.limit > data.length}
            />}
            </section>
            {data.length < 1 &&
                <div className='home__error-container'>
                    <h2 className='text-black text-xl font-bold'>
                        Opps, no results
                    </h2>
                    <p>{error}</p>
                </div>}
            </>
            }
            {loading && 
            <div className='mt-16 w-full flex-center'>
                <Image src="/loader.svg" 
                alt="loading"
                width={50}
                height={50}
                className='object-contain'/>
            </div>
            }
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