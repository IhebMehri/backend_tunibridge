import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class Dossier {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("text")
  description: string;

  @Column()
  dateDepot: Date;

  @Column({ nullable: true })
  dateRecu: Date;

  @Column()
  priorite: string;

  @Column()
  status: string;

  @Column()
  motif: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}