import type { Product } from "./Product.model";
import type { StatusType } from "./StatusType.model";

export interface ProductFilterState {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  statusType: number | null;
  setStatusType: (value: number) => void;
  statusTypes: StatusType[];
  products?: Product[] | null;
  isLoading: boolean;
}
