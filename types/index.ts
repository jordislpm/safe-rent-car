import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer:  (manufacturer: string) => void;
}

export interface CarCardProps {
    car: CarProps;
  }

  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
    carRent?: string;
    images: string[];
  }

 export  interface FetchCarState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export interface CarDetailsProps{
    isOpen: boolean;
    closeModal: ()=> void;
    car: CarProps;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
  export interface PrincipalSectionProps {
    searchParams: FilterProps;
  }

  export interface OptionProps {
    title: string;
    value: string;
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }

  export type ActionFilterReducerType = 
  | { type: 'SET_MANUFACTURER'; payload: string }
  | { type: 'SET_YEAR'; payload: number }
  | { type: 'SET_MODEL'; payload: string }
  | { type: 'SET_LIMIT'; payload: number }
  | { type: 'SET_FUEL'; payload: string }
  | { type: 'SET_FILTERS'; payload: Partial<FilterProps> };