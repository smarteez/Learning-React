import { z } from "zod";

export const GenreSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  description: z.string().min(1)
});

// ✅ Create the TypeScript type from the schema
export type Genre = z.infer<typeof GenreSchema>;
