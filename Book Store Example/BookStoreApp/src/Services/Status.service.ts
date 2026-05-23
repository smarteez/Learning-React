import { Endpoints } from "../API/endPoints.types";
import type { Status } from "../Schemas/Status.schemas";


export async function GetAllStatus(): Promise<Status[]> {;
  const res = await fetch(Endpoints.status.getAll);
  console.log(Endpoints.status.getAll)
  if (!res.ok) throw new Error("Failed to load status types");

  const json = await res.json();

  return json.map((item: { id: string; name: string;}) => ({
    id: Number(item.id),
    name: item.name,
  }));
}

export async function GetStatusById(id: number): Promise<Status | null> {
  const res = await fetch(`${Endpoints.status.getById}/${id}`);

  const json = await res.json();

  return {
    id: Number(json.id),
    name: json.name,
  };
}

