import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Parcours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diplome: string;

  @Column()
  typeDiplome: string;

  @Column("text")
  description: string;

  @Column()
  field: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column("float")
  moyenne: number;

  @Column()
  langue: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(()=>User,user=>user.id)
  user: User

}