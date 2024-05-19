'use client'
import React, { useState } from 'react'
import SearchManufacturer from '../SearchManufacturer/SearchManufacturer'
import SearchButton from '../SearchButton/SearchButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFilterSearch } from '@/hooks/useFiltersSearch';

function SearchBar() {
    const [manufacturer, setManufacturer] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const { filters, dispatch } = useFilterSearch()

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer === "" && model === "") {
            return alert("Please Fill in the search bar")
        }
updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searhParams = new URLSearchParams(window.location.search);

        if (model) {
            searhParams.set("model", model)
            dispatch({type: "SET_MODEL", payload: model})
            dispatch({type: "SET_LIMIT", payload: 10})
            searhParams.set("limit","10")
        } else {
            searhParams.delete("model")
        }


        if (manufacturer) {
            searhParams.set("manufacturer", manufacturer)
            dispatch({type: "SET_MANUFACTURER", payload: manufacturer})
            dispatch({type: "SET_LIMIT", payload: 10})
            searhParams.set("limit","10")
        } else {
            searhParams.delete("manufacturer")
        }
        const newPathName = `${window.location.pathname}?${searhParams.toString()}`
        router.push(newPathName)
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className='searchbar__item'>
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model" />
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input' />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar