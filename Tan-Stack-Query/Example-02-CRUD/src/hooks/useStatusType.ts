import { useQuery } from "@tanstack/react-query";
import type { StatusTypeModel } from "../models/StatusTypeModel";
import { GetAllStatusTypes, GetStatusTypeById } from "../services/StatusType.servies";

export function useStatusTypes() {
  return useQuery<StatusTypeModel[]>({
    queryKey: ["statusTypes"],
    queryFn: GetAllStatusTypes,
    staleTime: 1000 * 60 * 5, // 5 minutes
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