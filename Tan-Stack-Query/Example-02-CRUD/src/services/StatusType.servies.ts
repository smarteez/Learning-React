
import { Endpoints } from "../apis/endPoints.types";
import type { StatusTypeModel } from "../models/StatusTypeModel";

export async function GetAllStatusTypes(): Promise<StatusTypeModel[]> {;
  const res = await fetch(Endpoints.statusTypes.getAll);
  if (!res.ok) throw new Error("Failed to load status types");

  const json = await res.json();

  return json.map((item: { id: string; label: string; value: string }) => ({
    id: Number(item.id),
    label: item.label,
    value: item.value
  }));
}

export async function GetStatusTypeById(id: number): Promise<StatusTypeModel | null> {
  const res = await fetch(`${Endpoints.statusTypes.getById}/${id}`);

  const json = await res.json();

  return {
    id: Number(json.id),
    label: json.label,
    value: json.value
  };
}

