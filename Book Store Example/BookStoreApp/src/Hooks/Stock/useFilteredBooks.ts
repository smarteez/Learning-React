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

    genre,
    setGenre,
    genreData,

    language,
    setLanguage,
    languageData,

    rating,
    setRating,
  } = useSearchAndFilter();

  const { data: books, isLoading } = useBookByStatusAndBookTitle(
    status!,
    debouncedSearch,
    genre,
    language,
    rating
  );

  return {
    // Search
    searchTerm,
    setSearchTerm,

    // Status
    status,
    setStatus,
    statusData,

    // Genre
    genre,
    setGenre,
    genreData,

    // Language
    language,
    setLanguage,
    languageData,

    // Rating
    rating,
    setRating,

    // Books
    books,
    isLoading,
  };
}
