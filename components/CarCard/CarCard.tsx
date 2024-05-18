import React from 'react'
import { CarCardProps } from '@/types'

function CarCard({ cityMPG, year, carRent, make, model, transmission, drive }: CarCardProps) {
    
    
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
               $ 
            </span>
            {carRent !== "NaN" ? carRent : "100"}
            <span className='self-start text-[14px] font-semibold'>
               /day
            </span>
        </p>
        </div>
    )
}

export default CarCard