import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtCustomerGuard } from '../auth/guards/jwt-customer.guard';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtCustomerGuard)
  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    return this.orderService.create(req.user.id, createOrderDto);
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateOrderDto,
    isArray: true
  })
  @Get()
  async findAll() {
    const order = await this.orderService.findAll();
    if (order.length == 0) throw new NotFoundException('Заказы не найдены')
    return order
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateOrderDto
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const order = await this.orderService.findOne(+id);
    if (!order) throw new NotFoundException(`Заказ с номером ${id} не найден`)
    return order
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
