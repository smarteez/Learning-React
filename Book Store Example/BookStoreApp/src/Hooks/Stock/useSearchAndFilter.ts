import { useState } from "react";
import { useStatus } from "./useStatus";
import { useDebounce } from "../useDebounce";
import { useGenre } from "./useGenre";
import { useLanguage } from "./useLanguage";

export function useSearchAndFilter() {
  // --- API data ---
  const { data: statusData } = useStatus();
  const { data: genreData } = useGenre();
  const { data: languageData } = useLanguage();

  // --- Search ---
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  // --- Status ---
  const [status, setStatus] = useState<number | null>(null);
  const selectedStatus =
    status ??
    (statusData && statusData.length > 0 ? statusData[0].id : null);

  // --- Genre ---
  const [genre, setGenre] = useState<number>(0);

  // --- Language ---
  const [language, setLanguage] = useState<number>(0);

  // --- Rating ---
  const [rating, setRating] = useState<number>(0);

  return {
    // Search
    searchTerm,
    setSearchTerm,
    debouncedSearch,

    // Status
    status: selectedStatus,
    setStatus,
    statusData: statusData ?? [],

    // Genre
    genre,
    setGenre,
    genreData: genreData ?? [],

    // Language
    language,
    setLanguage,
    languageData: languageData ?? [],

    // Rating
    rating,
    setRating,
  };
}
