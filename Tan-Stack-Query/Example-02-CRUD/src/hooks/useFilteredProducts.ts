import { useSearchAndFilter } from "./useSearchAndFilter";
import { useProductsByStatusAndProduct } from "./useProduct";
import type { ProductFilterState } from "../models/ProductFilterState.model";

export function useFilteredProducts(): ProductFilterState {
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearch,
    statusType,
    setStatusType,
    statusTypes,
  } = useSearchAndFilter();

  const { data: products, isLoading } = useProductsByStatusAndProduct(
    statusType!,
    debouncedSearch
  );

  return {
    searchTerm,
    setSearchTerm,
    statusType,
    setStatusType,
    statusTypes,
    products,
    isLoading,
  };
}

