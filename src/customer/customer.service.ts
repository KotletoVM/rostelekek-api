import { Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto)
  }

  findAll() {
    const qb = this.customerRepository.createQueryBuilder('customer')
    return qb.select(['customer.id', 'customer.name', 'customer.surname', 'customer.email']).getMany()
  }

  async getProfile(user) {
    const qb = this.customerRepository.createQueryBuilder('customer')
    const {password,...customer} = await qb.select('customer').where('customer.id = :id', {id: user.id}).getOne()
    return customer
  }

  findOne(id: number) {
    const qb = this.customerRepository.createQueryBuilder('customer')
    return qb.select(['customer.id', 'customer.name', 'customer.surname',
      'customer.email', 'customer.phone', 'customer.address', 'customer.personal_account'])
      .where(`customer.id = :customer_id`,
      {customer_id: id}).getOne()
  }

  findOneByCond(cond: LoginCustomerDto) {
    return this.customerRepository.findOne(cond)
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto)
  }

  remove(id: number) {
    return this.customerRepository.delete(id)
  }
}