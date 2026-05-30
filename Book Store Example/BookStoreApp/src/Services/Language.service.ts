import { Endpoints } from "../API/endPoints.types";
import type { Language } from "../Schemas/Language.schema";

export async function GetAllLanguages(): Promise<Language[]> {
  const res = await fetch(Endpoints.language.getAll);
  if (!res.ok) throw new Error("Failed to load languages");

  const json = await res.json();

  return json.map((item: { id: string; name: string }) => ({
    id: Number(item.id),
    name: item.name,
  }))
  .sort((a,b) => a.name.localeCompare(b.name)); // ← ORDER BY NAME
}

export async function GetLanguageById(id: number): Promise<Language | null> {
  const res = await fetch(`${Endpoints.language.getById}/${id}`);
  if (!res.ok) throw new Error("Failed to load language");

  const json = await res.json();

  return {
    id: Number(json.id),
    name: json.name,
  };
}
