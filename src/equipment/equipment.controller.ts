import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateEquipmentDto
  })
  @Get()
  async findAll() {
    const equip = await this.equipmentService.findAll();
    if (equip.length == 0) throw new NotFoundException('Оборудование не найдено')
    return equip
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateEquipmentDto
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const equip = await this.equipmentService.findOne(+id);
    if (!equip) throw new NotFoundException(`Оборудование под номером ${id} не найдено`)
    return equip
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    const equip = await this.equipmentService.findOne(+id);
    if (!equip) throw new NotFoundException(`Оборудование под номером ${id} не найдено`)
    return this.equipmentService.update(+id, updateEquipmentDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const equip = await this.equipmentService.findOne(+id);
    if (!equip) throw new NotFoundException(`Оборудование под номером ${id} не найдено`)
    return this.equipmentService.remove(id)
  }
}
