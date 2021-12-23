import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { WorkActService } from './work-act.service';
import { CreateWorkActDto } from './dto/create-work-act.dto';
import { UpdateWorkActDto } from './dto/update-work-act.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('WorkAct')
@Controller('work-act')
export class WorkActController {
  constructor(private readonly workActService: WorkActService) {}

  @Post()
  create(@Body() createWorkActDto: CreateWorkActDto) {
    return this.workActService.create(createWorkActDto);
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateWorkActDto
  })
  @Get()
  async findAll() {
    const workAct = await this.workActService.findAll();
    if (workAct.length == 0) throw new NotFoundException('Чото не найдено ничо)')
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateWorkActDto
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const workAct = await this.workActService.findOne(+id);
    if (!workAct) throw new NotFoundException(`Чото с номером ${id} не найден`)
    return workAct
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateWorkActDto: UpdateWorkActDto) {
    const workAct = await this.workActService.findOne(+id);
    if (!workAct) throw new NotFoundException(`Чото с номером ${id} не найден`)
    return this.workActService.update(+id, updateWorkActDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const workAct = await this.workActService.findOne(+id);
    if (!workAct) throw new NotFoundException(`Чото с номером ${id} не найден`)
    return this.workActService.remove(+id);
  }
}
