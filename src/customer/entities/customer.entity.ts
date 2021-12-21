import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import { Exclude } from 'class-transformer'



@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({unique: true})
  email: string;
  //@Column({nullable: true})
  //password: string;
  @Column()
  password: string;
  @Column({unique: true})
  phone: string;
  @Column({nullable: true})
  address: string;
  @Column({unique: true})
  personal_account: string;
  @Column({unique: true})
  login: string;
  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;
  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;
  @Column({default: 'https://storage.yandexcloud.net/rostelecom/userpic/userpic.png'})
  userpic: string;
  @Column({ default: false })
  public isEmailConfirmed: boolean;
}