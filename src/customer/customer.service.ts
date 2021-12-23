import { Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

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
    return qb.select(['customer.id', 'customer.name', 'customer.email']).getMany()
  }

  findOne(id: number) {
    const qb = this.customerRepository.createQueryBuilder('customer')
    return qb.select(['customer.id', 'customer.name', 'customer.email', 'customer.phone', 'customer.address',
      'customer.login', 'customer.personal_account', 'customer.userpic']).where(`customer.id = :customer_id`,
      {customer_id: id}).getOne()
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto)
  }

  remove(id: number) {
    return this.customerRepository.delete(id)
  }
}