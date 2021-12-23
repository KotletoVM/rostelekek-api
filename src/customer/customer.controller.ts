import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /*@Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }*/
  @ApiOkResponse({
    description: "Запрос удался",
    type: CreateCustomerDto
  })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOkResponse({
    description: "Запрос удался",
    type: CreateCustomerDto
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const find = await this.customerService.findOne(+id);
    if (!find){throw new NotFoundException('Customer not found')}
    return find
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
