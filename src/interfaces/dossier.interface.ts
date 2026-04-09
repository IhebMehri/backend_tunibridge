export interface IDossier {
  id: number;
  nom: string;
  description: string;
  dateDepot: Date;
  dateRecu?: Date;
  priorite: string;
  status: string;
  motif: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDossier extends Omit<IDossier, "id" | "createdAt" | "updatedAt"> {}