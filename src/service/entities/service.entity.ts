import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { category } from "../../enums/category.enum";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "enum",
    enum: category,
    default: category.FOUR})
  category: string;
  @Column({unique: true})
  name: string;
  @Column({nullable: true})
  internet: string;
  @Column({nullable: true})
  tv: string;
  @Column({nullable: true})
  mobile: string;
  @Column({type: "float"})
  price: number;
}