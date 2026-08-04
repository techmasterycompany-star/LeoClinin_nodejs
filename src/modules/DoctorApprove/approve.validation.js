import { z } from "zod";

export const acceptAndRejectSchema = z.object({
  params: z.object({
    id: z.string().min(1, "doctor ID is required"),
  }),
});
