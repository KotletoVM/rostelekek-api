import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateWorkerDto } from '../worker/dto/create-worker.dto';
import { CustomerService } from '../customer/customer.service';
import { WorkerService } from '../worker/worker.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private workerService: WorkerService,
              private customerService: CustomerService,
              private configService: ConfigService,
              private jwtService: JwtService) {
  }

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    createCustomerDto.password = await this.generateHash(createCustomerDto.password)
    const {password, ...customer} = await this.customerService.create(createCustomerDto)
    return customer
  }

  async createWorker(createWorkerDto: CreateWorkerDto){
    createWorkerDto.password = await this.generateHash(createWorkerDto.password)
    const {password, ...worker} = await this.workerService.create(createWorkerDto)
    return worker
  }

  generateHash(password: string){
    return bcrypt.hash(password, 10);
  }

  async validateWorker(login: string, password: string) {
    const worker = await this.workerService.findOneByCond({login: login})
    if (worker){
      if (await bcrypt.compare(password, worker.password)){
        const {password,...result} = worker
        return result
      }
      else return null
    }
    else throw new NotFoundException('Сотрудник не найден')
  }

  async validateCustomer(email: string, password: string) {
    const customer = await this.customerService.findOneByCond({email: email})
    if (customer){
      if (await bcrypt.compare(password, customer.password)){
        const {password,...result} = customer
        return result
      }
      else return null
    }
    else throw new NotFoundException('Пользователь не найден')
  }

  async loginWorker(worker){
    const payload = {login: worker.login, sub: worker.id}
    const accessToken = this.generateJwtAccessToken(payload);
    const refreshToken = this.generateJwtRefreshToken(payload);
    return {accessToken: accessToken, refreshToken: refreshToken}
  }

  async loginCustomer(customer){
    const payload = {email: customer.email, sub: customer.id}
    const accessToken = this.generateJwtAccessToken(payload);
    const refreshToken = this.generateJwtRefreshToken(payload);
    return {accessToken: accessToken, refreshToken: refreshToken}
  }

  generateJwtAccessToken(payload){
    return this.jwtService.sign(payload, {privateKey: this.configService.get('access_token.privateKey'), expiresIn: this.configService.get('access_token.expiresIn')})
  }

  generateJwtRefreshToken(payload){
    return this.jwtService.sign(payload, {privateKey: this.configService.get('refresh_token.privateKey'), expiresIn: this.configService.get('refresh_token.expiresIn')})
  }
}
