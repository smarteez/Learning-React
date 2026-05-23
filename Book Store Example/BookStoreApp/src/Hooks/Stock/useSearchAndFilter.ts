import { useState} from "react";
import { useStatus } from "./useStatus";
import { useDebounce } from "../useDebounce";

export function useSearchAndFilter() {
  const { data: statusData } = useStatus();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const [status, setStatus] = useState<number | null>(null);

  const selectedStatus =
    status ??
    (statusData && statusData.length > 0 ? statusData[0].id : null);

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearch,
    status: selectedStatus,
    setStatus,
    statusData: statusData ?? [],   // ← FIX
  };
}



