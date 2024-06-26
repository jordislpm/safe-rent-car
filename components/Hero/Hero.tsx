'use client'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import Image from 'next/image'

function Hero() {


    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book or rent a car - safe, quickly and easily!
                </h1>
                <p className='hero__subtitle'>
                    Streamine your car rental experience with our effortles booking process.
                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src="/hero.png"
                        fill
                        className='object-contain'
                        alt='hero-car'
                    />
                   
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero