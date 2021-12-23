import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateWorkerDto } from '../worker/dto/create-worker.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({description: "Это для регистрации кустомеров)"})
  @ApiResponse({
    status: 201,
    description: 'Пользователь добавлен'
  })
  @Post('register')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.create(createCustomerDto);
  }

  @ApiOperation({description: "Это для регистрации работников)"})
  @ApiResponse({
    status: 201,
    description: 'Работник добавлен'
  })
  @Post('register-worker')
  createWorker(@Body() createWorkerDto: CreateWorkerDto) {
    return this.authService.createWorker(createWorkerDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
