import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column({type: "float"})
  price: number
  @Column({nullable: true})
  notes: string
}
