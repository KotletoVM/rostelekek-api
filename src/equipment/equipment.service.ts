import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './entities/equipment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>
  ) {}

  create(createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentRepository.save(createEquipmentDto)
  }

  findAll() {
    return this.equipmentRepository.find()
  }

  findOne(id: number) {
    return this.equipmentRepository.findOne(id)
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentRepository.update(id, updateEquipmentDto)
  }

  remove(id: number) {
    return this.equipmentRepository.delete(id)
  }
}
