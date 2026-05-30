import { z } from "zod";
import { GenreSchema } from "./Genre.schemas";
import { StatusSchema } from "./Status.schemas";
import { StockSchema } from "./Stock.schemas";
import { TagSchema } from "./Tag.schemas";
import { CountrySchema } from "./country.schema";
import { LanguageSchema } from "./Language.schema";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const BookSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  author: z.string(),
  year: z.number().positive(),
  rating: z.number().transform((val) => Math.round(val)),
  isbn: z.string(),
  price: z.number(),
  image_url: z.string().transform((val) => `${baseUrl}/${val}`),
  genre: GenreSchema,
  tags: z.array(TagSchema),
  status: StatusSchema,
  stock: StockSchema,
  country: CountrySchema,
  language: LanguageSchema,
  link: z.string().optional(),
  pages: z.number().positive()
});

export type Book = z.infer<typeof BookSchema>;