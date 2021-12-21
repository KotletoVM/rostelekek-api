import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";


@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column({nullable: true})
  experience: string;
  @Column()
  name: string;
  @Column()
  position: string;
}