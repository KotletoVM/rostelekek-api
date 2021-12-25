import { Injectable } from '@nestjs/common';
import { CreateWorkActDto } from './dto/create-work-act.dto';
import { UpdateWorkActDto } from './dto/update-work-act.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { WorkAct } from "./entities/work-act.entity";
import { Repository } from "typeorm";

@Injectable()
export class WorkActService {
  constructor(
    @InjectRepository(WorkAct)
    private workActRepository : Repository<WorkAct>
  ) {}

  async create(createWorkActDto: CreateWorkActDto) {
    return this.workActRepository.save(createWorkActDto)
  }

  findAll() {
    const qb = this.workActRepository.createQueryBuilder("work-act")
    return qb.innerJoin("work-act.id_order", "order")
      .innerJoin("work-act.id_worker", "worker")
      .select(["work-act", "order.id_customer", "order.id_service", "order.date",
        "worker.id" ,"worker.name"]).getMany()
  }

  findOne(id: number) {
    const qb = this.workActRepository.createQueryBuilder("work-act")
    return qb.innerJoin("work-act.id_order", "order")
      .innerJoin("work-act.id_worker", "worker")
      .select(["work-act", "order.id_customer", "order.id_service", "order.date",
        "worker.id" ,"worker.name"]).where("work-act.id = :id", {id: id}).getOne()
  }

  update(id: number, updateWorkActDto: UpdateWorkActDto) {
    return this.workActRepository.update(id, updateWorkActDto)
  }

  remove(id: number) {
    return this.workActRepository.delete(id)
  }
}
