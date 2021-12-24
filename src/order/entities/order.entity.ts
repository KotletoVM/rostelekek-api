import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Customer } from "../../customer/entities/customer.entity";
import { Service } from "../../service/entities/service.entity";
import { Equipment } from '../../equipment/entities/equipment.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Customer, customer => customer.id, {nullable: false})
  @JoinColumn({name: "id_customer"})
  id_customer: number;
  @Column({type: 'timestamp'})
  date: Date;
  @ManyToOne(() => Service, service => service.id, {nullable: false})
  @JoinColumn({name: "id_service"})
  id_service: number;
  @ManyToOne(() => Equipment, equip => equip.id, {nullable: false})
  @JoinColumn({name: "id_equip"})
  id_equip: number;
  @Column({type: "float"})
  end_price: number;
}