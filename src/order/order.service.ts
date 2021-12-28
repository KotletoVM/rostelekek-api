import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { EmailService } from '../email/email.service';
import { CustomerService } from '../customer/customer.service';
import { ServiceService } from '../service/service.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly emailService: EmailService,
    private readonly customerService: CustomerService,
    private readonly serviceService: ServiceService
  ) {
  }

  async create(id: number, createOrderDto: CreateOrderDto) {
    const customer = await this.customerService.findOne(id)
    const service = await this.serviceService.findOne(createOrderDto.id_service)
    const order = await this.orderRepository.save({
      id_customer: id,
      id_equip: createOrderDto.id_equip,
      id_service: createOrderDto.id_service,
      date: createOrderDto.date,
      end_price: createOrderDto.end_price
    })
    this.emailService.sendOrderMail(customer, service)
    return order
  }

  findAll() {
    const qb = this.orderRepository.createQueryBuilder('order')
    return qb
      .select('order').getMany()
  }

  findOne(id: number) {
    const qb = this.orderRepository.createQueryBuilder('order')
    return qb.select('order').where('order.id = :id', {id: id}).getOne()
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto)
  }

  remove(id: number) {
    return this.orderRepository.delete(id)
  }
}
