import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {
  }
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.save(createOrderDto)
  }

  findAll() {
    const qb = this.orderRepository.createQueryBuilder('order')
    return qb
      .select(['order']).getMany()
  }

  findOne(id: number) {
    const qb = this.orderRepository.createQueryBuilder('order')
    return qb.select(['order', 'service.id']).innerJoin('order.id_service', 'service').where('order.id = :id', {id: id}).getOne()
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto)
  }

  remove(id: number) {
    return this.orderRepository.delete(id)
  }
}
