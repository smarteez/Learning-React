import { z } from "zod";

export const LanguageSchema = z.object({
  id: z.number().positive(),
  name: z.string()
});

export type Language = z.infer<typeof LanguageSchema>;
