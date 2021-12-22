import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private workerRepository: Repository<Worker>){}

  create(createWorkerDto: CreateWorkerDto) {
    return this.workerRepository.save(createWorkerDto)
  }

  findAll() {
    const qb = this.workerRepository.createQueryBuilder('worker')
    return qb.select(['worker.id', 'worker.name', 'worker.experience', 'worker.position']).getMany()
  }

  findOne(id: number) {
    return this.workerRepository.findOne(id)
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepository.update(id, updateWorkerDto)
  }

  remove(id: number) {
    return this.workerRepository.delete(id)
  }
}
