'use client'
import React, {useState, Fragment} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'
import { manufacturers } from '@/constants'

function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
   const [query, setQuery]= useState<string>("");

   const filteredManufacturers = 
   query === "" 
   ? manufacturers
   : manufacturers.filter((item)=>(
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
   ))
   
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full '>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt='Car logo'
                            className='ml-4' />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) =>
                            manufacturer
                            
                        } 
                        onChange={(e)=> setQuery(e.target.value)}/>
                        <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={()=>setQuery("")}>
<Combobox.Options>

</Combobox.Options>
                        </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer