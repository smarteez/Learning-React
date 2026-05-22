import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useProductTypes } from "../hooks/useProductTypes";
import type { ProductCategory } from "../models/ProductCategory.model";
import type { StatusType } from "../models/StatusType.model";

// -----------------------------
// 1. ZOD SCHEMA
// -----------------------------
const ProductFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  price: z.number().min(0, "Price must be positive"),
  productCategoryId: z.number().min(1, "Category is required"),
  productTypeId: z.number().min(1, "Product type is required"),
  statusTypeId: z.number().min(1, "Status is required"),
  sku: z.string().optional(),
  barcode: z.string().optional(),
  description: z.string().optional(),
  rating: z.number().optional(),
});

export type ProductFormValues = z.infer<typeof ProductFormSchema>;

// -----------------------------
// 2. HOOK
// -----------------------------
export const useProductForm = (
  categories: ProductCategory[],
  statusTypes: StatusType[],
  onSubmit: (data: ProductFormValues) => void
) => {
  // -----------------------------
  // 3. React Hook Form Setup
  // -----------------------------
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      productCategoryId: 0,
      productTypeId: 0,
      statusTypeId: 0,
      sku: "",
      barcode: "",
      description: "",
      rating: 0,
    },
  });

  const { watch, setValue, handleSubmit } = form;

  // -----------------------------
  // 4. Watch category selection
  // -----------------------------
  const selectedCategoryId = watch("productCategoryId");

  // -----------------------------
  // 5. Load product types dynamically
  // -----------------------------
  const {
    data: productTypes = [],
    isLoading: productTypesLoading,
  } = useProductTypes(selectedCategoryId);

  // -----------------------------
  // 6. Reset productTypeId when category changes
  // -----------------------------
  useEffect(() => {
    setValue("productTypeId", 0);
  }, [selectedCategoryId, setValue]);

  // -----------------------------
  // 7. Submit handler
  // -----------------------------
  const submit = handleSubmit((data) => {
    onSubmit(data);
  });

  return {
    form,
    submit,
    categories,
    statusTypes,
    productTypes,
    productTypesLoading,
  };
};
