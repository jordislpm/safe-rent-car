import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div
                className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6 '>
                    <Image
                        src='/logo-safe.svg'
                        alt='logo_safe-rent-car'
                        width={118}
                        height={18}
                        className='object-contain' />
                    <p className='text-base text-gray-700'>
                        Safe Rent Car 2024 <br /> All rights reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>

                </div>
            </div>





            <div className='flex w-full justify-center'>
                <p className='text-base text-gray-700'>
                    This project was developed by <a
                        href="https://www.jordisdev.com/" target='_blank' className='cursor-pointer'
                    >jordisdev.com</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer