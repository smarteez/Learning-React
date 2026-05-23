import { Endpoints } from "../API/endPoints.types";
import { BookSchema, type Book } from "../Schemas/Book.schemas";
import { z } from "zod";

export async function GetAllBooks(): Promise<Book[]> {
  const res = await fetch(Endpoints.Books.getAll);
  if (!res.ok) throw new Error("Failed to load books");

  const json = await res.json();

  return z.array(BookSchema).parse(json);
}

export async function GetBookById(id: number): Promise<Book | null> {
  const res = await fetch(`${Endpoints.Books.getById}/${id}`);
  if (!res.ok) throw new Error("Failed to load book");

  const json = await res.json();
  return BookSchema.parse(json);
}
