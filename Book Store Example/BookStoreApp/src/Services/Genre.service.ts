import { Endpoints } from "../API/endPoints.types";
import type { Genre } from "../Schemas/Genre.schemas";

export async function GetAllGenres(): Promise<Genre[]> {
  const res = await fetch(Endpoints.genres.getAll);
  if (!res.ok) throw new Error("Failed to load genres");

  const json = await res.json();

  return json.map((item: { id: string; name: string }) => ({
    id: Number(item.id),
    name: item.name,
  }))
   .sort((a,b) => a.name.localeCompare(b.name)); // ← ORDER BY NAME
}

export async function GetGenreById(id: number): Promise<Genre | null> {
  const res = await fetch(`${Endpoints.genres.getById}/${id}`);
  if (!res.ok) throw new Error("Failed to load genre");

  const json = await res.json();

  return {
    id: Number(json.id),
    name: json.name,
    description: json.description
  };
}
