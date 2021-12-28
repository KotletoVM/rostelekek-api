import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn, CreateDateColumn,
} from 'typeorm';
import { Customer } from "../../customer/entities/customer.entity";
import { Service } from "../../service/entities/service.entity";
import { Equipment } from '../../equipment/entities/equipment.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Customer, customer => customer.id, {nullable: false})
  @JoinColumn({name: "id_customer"})
  @Column()
  id_customer: number;
  @CreateDateColumn({type: 'timestamp'})
  date: Date;
  @ManyToOne(() => Service, service => service.id, {nullable: false})
  @JoinColumn({name: "id_service"})
  @Column()
  id_service: number;
  @ManyToOne(() => Equipment, equip => equip.id, {nullable: true})
  @JoinColumn({name: "id_equip"})
  @Column({nullable: true})
  id_equip: number;
  @Column({type: "float"})
  end_price: number;
  @Column()
  street: string;
  @Column()
  home: number;
  @Column()
  flat: number;
}