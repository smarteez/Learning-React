import { useQuery } from "@tanstack/react-query";
import { GetAllStatus, GetStatusById } from "../../Services/Status.service";
import type { Status } from "../../Schemas/Status.schemas";

export function useStatus() {
  return useQuery<Status[]>({
    queryKey: ["status"],
    queryFn: GetAllStatus,
    //staleTime: 1000 * 60 * 5, // 5 minutes
  });
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStatusType(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["statusType", id],
    queryFn: () => GetStatusById(id),
    enabled: options.enabled ?? true,
  });
}