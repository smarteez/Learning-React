import { z } from "zod";
import { GenreSchema } from "./Genre.schemas";
import { StatusSchema } from "./Status.schemas";
import { StockSchema } from "./Stock.schemas";
import { TagSchema } from "./Tag.schemas";

export const BookSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  author: z.string().min(1),
  year: z.number().int().min(0),
  rating: z.number().min(0).max(5),
  isbn: z.string().min(1),
  price: z.number().nonnegative(),
  image_url: z.string().url(),

  genre: GenreSchema,
  tags: z.array(TagSchema),
  status: StatusSchema,
  stock: StockSchema
});

export type Book = z.infer<typeof BookSchema>;