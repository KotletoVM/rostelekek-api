import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "../../order/entities/order.entity";
import { Worker } from '../../worker/entities/worker.entity'
@Entity()
export class WorkAct {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, order => order.id, {nullable: false})
  @JoinColumn({name: "id_order"})
  id_order: number;
  @ManyToOne(() => Worker, worker => worker.id, {nullable: false})
  @JoinColumn({name: "id_worker"})
  id_worker: number;
  @Column({nullable: true, type: "timestamp"})
  start_date: Date;
  @Column({nullable: true, type: "timestamp"})
  finish_date: Date;
  @Column({nullable: true})
  equipment: string;
  @Column({nullable: true})
  state: string;
}