import { Injectable } from '@nestjs/common';
import { CreateWorkActDto } from './dto/create-work-act.dto';
import { UpdateWorkActDto } from './dto/update-work-act.dto';

@Injectable()
export class WorkActService {
  create(createWorkActDto: CreateWorkActDto) {
    return 'This action adds a new workAct';
  }

  findAll() {
    return `This action returns all workAct`;
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
