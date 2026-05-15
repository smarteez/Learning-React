
import { useQuery } from "@tanstack/react-query";
import { GetProductTypeById } from "../services/productTypes.services";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useProductType(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["productType", id],
    queryFn: () => GetProductTypeById(id),
    enabled: options.enabled ?? true,
  });
}
