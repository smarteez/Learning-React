
import type { Book } from "../Schemas/Book.schemas";
import type { Status } from "../Schemas/Status.schemas";


export interface StockFilterState {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  status: number | null;
  setStatus: (value: number) => void;
  statusData: Status[];   // ← FIXED
  books?: Book[] | null;
  isLoading: boolean;
}
