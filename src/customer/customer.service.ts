import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    const qb = this.customerRepository.createQueryBuilder('customer')
    qb.insert()
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
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
