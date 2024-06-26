"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '../CustomButton/CustomButton'

function Header() {

    const signIn = ()=>{
alert("Opps... Sorry, this feature is currently not available, we will soon enable user registrations, enjoy the site.")
    }
    return (
        <header className='w-full absolute z-10 '>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/"
                    className='flex justify-center items-center'>
                    <Image
                        src='/logo-safe.svg'
                        alt='logo_safe-rent-car'
                        width={118}
                        height={50}
                        className='object-contain' />
                </Link>
                <CustomButton
                title='Sign-in'
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={signIn}/>
            </nav>
        </header>
    )
}

export default Header