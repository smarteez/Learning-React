/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";
import type { ProductType } from "../models/ProductType.model";

/**
 * useSKUGenerator Hook
 *
 * Generates the BASE SKU (pure, deterministic):
 *   CAT-PT
 *
 * Randomness must NOT happen here.
 */
export const useSKUGenerator = (productType: ProductType | null) => {
  return useMemo(() => {
    if (!productType) return "";

    const categoryShort = productType.productCategory.shortcode;
    const typeShort = productType.shortcode;

    return `${categoryShort}-${typeShort}`;
  }, [productType]);
};
