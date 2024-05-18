import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> ;
    btnType?: "button" | "submit";
}

export interface CustomFilterProps{
    title: string;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer:  (manufacturer: string) => void;
}

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
    carRent?: any;

  }

 export  interface FetchCarState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}