'use client'
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { FilterProps } from '@/types';
import { ActionFilterReducerType } from '@/types';
import { stat } from 'fs';



interface FilterContextProps {
  filters: FilterProps;
  dispatch: Dispatch<ActionFilterReducerType>;
}

const initialState: FilterProps = {
  manufacturer: "volkswagen",
  year: 2022,
  model: "",
  limit: 10,
  fuel: "",
};

export const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const filterReducer = (state: FilterProps, action: ActionFilterReducerType): FilterProps => {
  switch (action.type) {
    case 'SET_MANUFACTURER':
      return { ...state, manufacturer: action.payload };  
    case 'SET_YEAR':
      return { ...state, year: action.payload };
    case 'SET_MODEL':
      return { ...state, model: action.payload };
    case 'SET_LIMIT':
      return { ...state, limit: action.payload };
    case 'SET_FUEL':
      return { ...state, fuel: action.payload };
    case 'SET_FILTERS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
  
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

