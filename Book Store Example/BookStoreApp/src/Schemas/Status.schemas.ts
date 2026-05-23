import { z } from "zod";

export const StatusSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1)
});

export type Status = z.infer<typeof StatusSchema>;