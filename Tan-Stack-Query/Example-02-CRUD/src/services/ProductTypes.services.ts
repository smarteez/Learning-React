// import { Endpoints } from "../apis/endPoints.types";
// import type { ProductType } from "../models/ProductType.model";


// export async function GetProductTypesByCategoryById(id: number): Promise<ProductType[] | null> {
//   const res = await fetch(`${Endpoints.productTypes.getByCategoryId}/${id}`);
//   if (!res.ok) throw new Error("Failed to load product Types by category id");

//   const json = await res.json();

//   return json.map((item: { id: string; categoryId: string; name: string }) => ({
//     id: Number(item.id),
//     categoryId: Number(item.categoryId),
//     name: item.name
//   }));
// }

// export async function GetProductTypeById(id: number): Promise<ProductType | null> {
//   const res = await fetch(`${Endpoints.productTypes.getById}/${id}`);
//   if (!res.ok) throw new Error("Failed to load product type");

//   const json = await res.json();

//   // FIX: Convert id to number so .find() works
//   return {
//     id: Number(json.id),
//     categoryId: Number(json.categoryId),
//     name: json.name
//   };
// }