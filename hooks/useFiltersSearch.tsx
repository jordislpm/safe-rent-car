import { useContext } from "react";
import { FilterContext } from "@/context/filtercontex";

export const useFilterSearch = () => {
    const context = useContext(FilterContext);
    if (!context) {
      throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
  };