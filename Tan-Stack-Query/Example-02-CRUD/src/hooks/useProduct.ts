import { useQuery } from "@tanstack/react-query";
import { GetAllProducts, GetProductById } from "../services/Product.servies";
import type { Product } from "../models/Product.model";

// PRIVATE
function useProduct() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: GetAllProducts,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProductById(id: number) {
  return useQuery<Product | null>({
    queryKey: ["products", id],
    queryFn: () => GetProductById(id),
    gcTime:0,
  });
}


export function useProductsByStatusAndProduct(
  statusTypeId: number,
  productName: string | null = null
) {
  const { data, isLoading, isError } = useProduct();

  const filtered: Product[] =
    data
      ?.filter((p) => {
        const matchesStatus = p.statusType.id === statusTypeId;
        const matchesName = productName
          ? p.name.toLowerCase().includes(productName.toLowerCase())
          : true;

        return matchesStatus && matchesName;
      })
      .sort((a, b) => a.name.localeCompare(b.name)) ?? [];
  return {
    data: filtered,
    isLoading,
    isError,
  };
}


