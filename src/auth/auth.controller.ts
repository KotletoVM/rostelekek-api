import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateWorkerDto } from '../worker/dto/create-worker.dto';
import { ApiBasicAuth, ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalWorkerGuard } from './guards/local-worker.guard';
import { LocalCustomerGuard } from './guards/local-customer.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({description: "Это для регистрации кустомеров)"})
  @ApiResponse({
    status: 201,
    description: 'Пользователь добавлен'
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        "accessToken": {},
        "refreshToken": {}
      }
    }
  })
  @Post('register')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.createCustomer(createCustomerDto);
  }

  @ApiOperation({description: "Это для регистрации работников)"})
  @ApiResponse({
    status: 201,
    description: 'Работник добавлен'
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        "accessToken": {},
        "refreshToken": {}
      }
    }
  })
  @Post('register-worker')
  createWorker(@Body() createWorkerDto: CreateWorkerDto) {
    return this.authService.createWorker(createWorkerDto);
  }

  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        "accessToken": {},
        "refreshToken": {}
      }
    }
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        login: {},
        password: {}
      }
    }
  })
  @ApiBasicAuth('local-worker')
  @UseGuards(LocalWorkerGuard)
  @Post('login-worker')
  loginWorker(@Request() req){
    return this.authService.loginWorker(req.user)
  }

  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        "accessToken": {},
        "refreshToken": {}
      }
    }
  })
  @ApiBasicAuth('local-customer')
  @UseGuards(LocalCustomerGuard)
  @Post('login')
  loginCustomer(@Request() req){
    return this.authService.loginCustomer(req.user)
  }
}
