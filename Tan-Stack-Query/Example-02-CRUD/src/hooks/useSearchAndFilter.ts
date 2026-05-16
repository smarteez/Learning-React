import { useState} from "react";
import { useDebounce } from "./useDebounce";
import { useStatusTypes } from "./useStatusType";

export function useSearchAndFilter() {
  const { data: statusTypes } = useStatusTypes();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const [statusType, setStatusType] = useState<number | null>(null);

  const selectedStatusType =
    statusType ??
    (statusTypes && statusTypes.length > 0 ? statusTypes[0].id : null);

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearch,
    statusType: selectedStatusType,
    setStatusType,
    statusTypes: statusTypes ?? [],   // ← FIX
  };
}



