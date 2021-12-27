import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column({unique: true})
  email: string;
  @Column()
  password: string;
  @Column({unique: true, nullable: true})
  phone: string;
  @Column({nullable: true})
  address: string;
  @Column({unique: true, nullable: true})
  personal_account: string;
  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;
  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;
  @Column({ default: false })
  isEmailConfirmed: boolean;
}