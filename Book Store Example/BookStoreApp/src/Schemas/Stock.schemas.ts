import { z } from "zod";

export const StockSchema = z.object({
  NoAvailable: z.number().nonnegative(),
  NoOfSold: z.number().nonnegative()
});

// ✅ Create the TypeScript type from the schema
export type Stock = z.infer<typeof StockSchema>;
