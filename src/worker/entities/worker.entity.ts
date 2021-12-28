import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { position } from '../../enums/position.enum';


@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  login: string;
  @Column()
  password: string;
  @Column({nullable: true})
  experience: string;
  @Column()
  name: string;
  @Column({
    type: 'enum',
    enum: position,
    default: position.EXECUTOR
  })
  position: string;
}