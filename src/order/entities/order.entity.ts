import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Customer } from "../../customer/entities/customer.entity";
import { Service } from "../../service/entities/service.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Customer, customer => customer.id, {nullable: false})
  @JoinColumn({name: "id_customer"})
  id_customer: string;
  @Column({type: 'timestamp'})
  date: Date;
  @ManyToOne(() => Service, service => service.id, {nullable: false})
  @JoinColumn({name: "id_service"})
  id_service: string;
}