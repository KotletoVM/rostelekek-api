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
  create(createWorkActDto: CreateWorkActDto) {
    return this.workActRepository.create(createWorkActDto)
  }

  findAll() {
    const qb = this.workActRepository.createQueryBuilder("work-act")
    return qb.innerJoin("work-act.id_order", "order")
      .innerJoin("work-act.id_worker", "worker")
      .select(["work-act", "order.id_customer", "order.id_service", "order.date",
        "worker.id" ,"worker.name"]).getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} workAct`;
  }

  update(id: number, updateWorkActDto: UpdateWorkActDto) {
    return `This action updates a #${id} workAct`;
  }

  remove(id: number) {
    return `This action removes a #${id} workAct`;
  }
}
