import type { ProductCategory } from "../types/productCategory.types";


export async function fetchProductCategories(): Promise<ProductCategory[]> {
  const res = await fetch("http://localhost:4000/productCategories");
  if (!res.ok) throw new Error("Failed to load product categories");

  const json = await res.json();

  // FIX: Convert id to number so .find() works
  return json.map((item: { id: string; name: string }) => ({
    id: Number(item.id),
    name: item.name
  }));
}
