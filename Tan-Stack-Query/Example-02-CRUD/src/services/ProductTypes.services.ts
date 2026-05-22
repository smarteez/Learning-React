import { Endpoints } from "../apis/endPoints.types";
import type { ProductType } from "../models/ProductType.model";




export async function GetProductTypesByCategoryById(categoryId: number): Promise<ProductType[]> {
  try {
    const res = await fetch(`${Endpoints.productTypes.getByCategoryId}${categoryId}`);

    if (!res.ok) {
      throw new Error("Failed to load product types");
    }

    const json = await res.json();

    return json.map((pt: any) => ({
      id: Number(pt.id),
      name: pt.name,
      shortcode: pt.shortcode,
      productCategory: pt.productCategory,
    }));
  } catch (error) {
    console.error("GetProductTypesByCategoryById error:", error);
    return []; // ⬅ IMPORTANT: NEVER return null
  }
}
