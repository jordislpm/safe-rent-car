"use client"

import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CustomFilter from '../CustomFilter/CustomFilter'
import useFetchDataCars from '@/hooks/useFetchDataCar'

function PrincipalSection() {
const {data, loading, error} = useFetchDataCars();


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
{data ? <section>
we hace cars
</section> :
<div> Oops, no results</div>}
        </div>
    )
}

export default PrincipalSection