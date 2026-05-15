import { useQuery } from "@tanstack/react-query";
import type { ProductCategory } from "../types/productCategory.types";
import { GetAllProductCategories, GetProductCategoryById } from "../services/productCategories.services";

export function useProductCategories() {
  return useQuery<ProductCategory[]>({
    queryKey: ["productCategories"],
    queryFn: GetAllProductCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useProductCategory(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["productCategory", id],
    queryFn: () => GetProductCategoryById(id),
    enabled: options.enabled ?? true,
  });
}