/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";
import type { ProductType } from "../models/ProductType.model";
import type { ProductCategory } from "../models/ProductCategory.model";

/**
 * useFilteredProductTypes Hook
 *
 * Filters the full list of product types based on the selected category.
 *
 * PARAMETERS:
 * @param productTypes - (required) Full list of product types.
 *                       Type: ProductType[]
 *
 * @param selectedCategory - (required) The selected category object.
 *                           Type: ProductCategory | null
 *
 * RETURNS:
 *  ProductType[] - Filtered list of product types.
 *
 * NOTES:
 * - If no category is selected, returns an empty array.
 * - Memoized for performance.
 * - Works perfectly with useDropdownOptions + DropDown.tsx.
 */
export const useFilteredProductTypes = (
  productTypes: ProductType[],
  selectedCategory: ProductCategory | null
) => {
  return useMemo(() => {
    if (!selectedCategory) return [];

    return productTypes.filter(
      (pt) => pt.productCategory.id === selectedCategory.id
    );
  }, [productTypes, selectedCategory]);
};
