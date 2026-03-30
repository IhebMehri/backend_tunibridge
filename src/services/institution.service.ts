import { Repository } from "typeorm";
import { Institution } from "../entities/institution.entity";
import { AppDataSource } from "../config/data-source";

export class InstitutionService {
  private repo: Repository<Institution>;

  constructor() {
    this.repo = AppDataSource.getRepository(Institution);
  }

  async create(data: any) {
    const inst = this.repo.create(data);
    return await this.repo.save(inst);
  }

  async getAll() {
    return await this.repo.find();
  }

  async getById(id: number) {
    return await this.repo.findOneBy({ id });
  }

  async delete(id: number) {
    const res = await this.repo.delete(id);
    return res.affected;
  }
}