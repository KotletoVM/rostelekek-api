import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({nullable: true})
  internet: string;
  @Column({nullable: true})
  tv: string;
  @Column({nullable: true})
  mobile: string;
  @Column()
  price: number;
}