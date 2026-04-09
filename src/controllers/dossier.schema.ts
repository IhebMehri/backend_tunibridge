import { z } from "zod";

export const ValidateDossierSchema = z.object({
  nom: z.string(),
  description: z.string(),
  dateDepot: z.string(),
  dateRecu: z.string().optional(),
  priorite: z.string(),
  status: z.string(),
  motif: z.string()
});