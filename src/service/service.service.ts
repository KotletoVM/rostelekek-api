import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>
  ) {
  }
  create(createServiceDto: CreateServiceDto) {
    return this.serviceRepository.save(createServiceDto)
  }

  findAll() {
    return this.serviceRepository.find()
  }

  findOne(id: number) {
    return this.serviceRepository.findOne(id)
  }

  async findByCategory(cat: CategoryDto){
    const qb = this.serviceRepository.createQueryBuilder('service')
    qb.select('service').where('service.category == :cat', {cat: cat})
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.serviceRepository.update(id, updateServiceDto)
  }

  remove(id: number) {
    return this.serviceRepository.delete(id)
  }
}
