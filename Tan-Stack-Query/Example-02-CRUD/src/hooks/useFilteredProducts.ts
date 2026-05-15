import { useSearchAndFilter } from "./useSearchAndFilter";
import { useProductsByStatusAndProduct } from "./useProduct";

export function useFilteredProducts() {
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
    debouncedSearch,
    statusType,
    setStatusType,
    statusTypes,
    products,
    isLoading,
  };
}
