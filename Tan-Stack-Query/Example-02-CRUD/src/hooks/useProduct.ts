import { useQuery } from "@tanstack/react-query";
import { useProductType } from "./useProductTypes";
import { mapGetByIdProduct } from "../mapping/product.mapper";
import { useProductCategory } from "./useProductCategories";
import type { ProductModel } from "../models/ProductModel";
import { useStatusType } from "./useStatusType";
import { GetAllProducts } from "../services/Product.servies";

// PRIVATE
function useProduct() {
  return useQuery<ProductModel[]>({
    queryKey: ["products"],
    queryFn: GetAllProducts,
    staleTime: 1000 * 60 * 5,
  });
}

// PUBLIC — filter by statusTypeId
export function useProductsByStatusAndProduct(
  statusTypeId: number,
  productName: string | null = null
) {
  console.log(statusTypeId, productName);
  const { data, isLoading, isError } = useProduct();

  const filtered: ProductModel[] =
    data?.filter((p) => {
      const matchesStatus = p.statusTypeId === statusTypeId;
      const matchesName = productName
        ? p.name.toLowerCase().includes(productName.toLowerCase())
        : true;
      
      return matchesStatus && matchesName;
    }) ?? [];
   console.log(filtered);
  return {
    data: filtered,
    isLoading,
    isError,
  };
}



// PUBLIC — get full product details by ID
export function useProductsByProductId(productId: number) {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useProduct();

  // 1️⃣ Find product
  const product = products?.find((p) => p.id === productId);

  // 2️⃣ Dependent queries (always called, but disabled until product exists)
  const productTypeQuery = useProductType(product?.productTypeId ?? 0, {
    enabled: !!product,
  });

  const productCategoryQuery = useProductCategory(productTypeQuery?.data?.id ?? 0, {
    enabled: !!product,
  });

  const statusTypeQuery = useStatusType(product?.statusTypeId ?? 0, {
    enabled: !!product,
  });

  const productMapped =
    product &&
    productTypeQuery.data &&
    productCategoryQuery.data &&
    statusTypeQuery.data
      ? mapGetByIdProduct(
          product,
          statusTypeQuery.data.value,
          productCategoryQuery.data.id,
          productCategoryQuery.data.name,
          productTypeQuery.data.name
        )
      : undefined;

  return {
    data: productMapped,
    isLoading:
      isProductsLoading ||
      productTypeQuery.isLoading ||
      productCategoryQuery.isLoading ||
      statusTypeQuery.isLoading,
    isError:
      isProductsError ||
      productTypeQuery.isError ||
      productCategoryQuery.isError ||
      statusTypeQuery.isError,
  };
}
