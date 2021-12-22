import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateWorkerDto } from '../worker/dto/create-worker.dto';
import { CustomerService } from '../customer/customer.service';
import { WorkerService } from '../worker/worker.service';

@Injectable()
export class AuthService {
  constructor(private workerService: WorkerService,
              private customerService: CustomerService) {
  }
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new auth';
  }

  async createWorker(createWorkerDto: CreateWorkerDto){
    createWorkerDto.password = await this.generateHash(createWorkerDto.password)
    const {password, ...worker} = await this.workerService.create(createWorkerDto)
    return worker
  }

  generateHash(password: string){
    return bcrypt.hash(password, 10);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  /*update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }*/

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
