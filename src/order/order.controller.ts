import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    const order = await this.orderService.findAll();
    if (order.length == 0) throw new NotFoundException('Заказы не найдены')
    return order
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const order = await this.orderService.findOne(+id);
    if (!order) throw new NotFoundException(`Заказ с номером ${id} не найден`)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    const order = await this.orderService.findOne(+id);
    if (!order) throw new NotFoundException(`Заказ с номером ${id} не найден`)
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const order = await this.orderService.findOne(+id);
    if (!order) throw new NotFoundException(`Заказ с номером ${id} не найден`)
    return this.orderService.remove(+id);
  }
}
