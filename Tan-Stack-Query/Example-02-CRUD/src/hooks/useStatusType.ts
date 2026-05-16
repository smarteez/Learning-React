import { useQuery } from "@tanstack/react-query";
import { GetAllStatusTypes, GetStatusTypeById } from "../services/StatusType.servies";
import type { StatusType } from "../models/StatusType.model";

export function useStatusTypes() {
  return useQuery<StatusType[]>({
    queryKey: ["statusTypes"],
    queryFn: GetAllStatusTypes,
    //staleTime: 1000 * 60 * 5, // 5 minutes
  });
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStatusType(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["statusType", id],
    queryFn: () => GetStatusTypeById(id),
    enabled: options.enabled ?? true,
  });
}