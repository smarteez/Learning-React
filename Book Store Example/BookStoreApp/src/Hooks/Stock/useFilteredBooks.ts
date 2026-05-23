import type { StockFilterState } from "../../Models/StockFilterState.model";
import { useBookByStatusAndBookTitle } from "./useBook";
import { useSearchAndFilter } from "./useSearchAndFilter";


export function useFilteredBooks(): StockFilterState {
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearch,
    status,
    setStatus,
    statusData,
  } = useSearchAndFilter();

  const { data: books, isLoading } = useBookByStatusAndBookTitle(
    status!,
    debouncedSearch
  );

  return {
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    statusData,
    books,
    isLoading,
  };
}

