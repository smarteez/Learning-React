import { z } from "zod";

export const TagSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1)
});

// ✅ Create the TypeScript type from the schema
export type Tag = z.infer<typeof TagSchema>;
