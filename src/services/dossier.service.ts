import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Dossier } from "../entities/dossier.entity";
import { CreateDossier } from "../interfaces/dossier.interface";

export class DossierService {
  private dossierRepo: Repository<Dossier>;

  constructor() {
    this.dossierRepo = AppDataSource.getRepository(Dossier);
  }

  async createDossierService(data: CreateDossier): Promise<Dossier> {
    const dossier: Dossier = this.dossierRepo.create(data);
    return await this.dossierRepo.save(dossier);
  }

  async getDossiersService(): Promise<Dossier[]> {
    return await this.dossierRepo.find();
  }

  async getDossierByIdService(id: number): Promise<Dossier | null> {
    return await this.dossierRepo.findOne({
      where: { id }
    });
  }

  async updateDossierService(id: number, data: Partial<CreateDossier>): Promise<Dossier | null> {
    await this.dossierRepo.update(id, data);
    return await this.getDossierByIdService(id);
  }

  async deleteDossierService(id: number): Promise<void> {
    await this.dossierRepo.delete(id);
  }
}