import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "../models/ProductType.model";
import { GetProductTypesByCategoryById } from "../services/ProductTypes.services";

export const useProductTypes = (categoryId?: number) => {
  return useQuery<ProductType[]>({
    queryKey: ["productTypes", categoryId],
    queryFn: () => GetProductTypesByCategoryById(categoryId!),
    enabled: !!categoryId,
    gcTime:0
  });
};