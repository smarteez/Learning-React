import { useQuery } from "@tanstack/react-query";
import type { ProductCategory } from "../types/productCategory.types";
import { fetchProductCategories } from "../services/productCategories.services";

export function useProductCategories() {
  return useQuery<ProductCategory[]>({
    queryKey: ["productCategories"],
    queryFn: fetchProductCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}