import type { Book } from "../Schemas/Book.schemas";
import type { Status } from "../Schemas/Status.schemas";
import type { Genre } from "../Schemas/Genre.schemas";
import type { Language } from "../Schemas/Language.schema";

export interface StockFilterState {
  // Search
  searchTerm: string;
  setSearchTerm: (value: string) => void;

  // Status filter
  status: number | null;
  setStatus: (value: number) => void;
  statusData: Status[];

  // Genre filter
  genre: number | "";
  setGenre: (value: number) => void;
  genreData: Genre[];

  // Language filter
  language: number | "";
  setLanguage: (value: number) => void;
  languageData: Language[];

  // Rating filter
  rating: number;
  setRating: (value: number) => void;

  // Books + loading
  books?: Book[];
  isLoading: boolean;
}
