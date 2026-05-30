import { z } from "zod";

export const CountrySchema = z.object({
  id: z.number().positive(),
  name: z.string()
});

export type Country = z.infer<typeof CountrySchema>;
