import type { ProductCategory } from "../types/productCategory.types";
import { Endpoints } from "../apis/endPoints.types";

export async function GetAllProductCategories(): Promise<ProductCategory[]> {;
  const res = await fetch(Endpoints.productCategories.getAll);
  if (!res.ok) throw new Error("Failed to load product categories");

  const json = await res.json();

  // FIX: Convert id to number so .find() works
  return json.map((item: { id: string; name: string }) => ({
    id: Number(item.id),
    name: item.name
  }));
}

export async function GetProductCategoryById(id: number): Promise<ProductCategory | null> {
  const res = await fetch(`${Endpoints.productCategories.getById}/${id}`);
  if (!res.ok) throw new Error("Failed to load product category");

  const json = await res.json();

  // FIX: Convert id to number so .find() works
  return {
    id: Number(json.id),
    name: json.name
  };
}

