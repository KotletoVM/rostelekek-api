import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkActService } from './work-act.service';
import { CreateWorkActDto } from './dto/create-work-act.dto';
import { UpdateWorkActDto } from './dto/update-work-act.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WorkAct')
@Controller('work-act')
export class WorkActController {
  constructor(private readonly workActService: WorkActService) {}

  @Post()
  create(@Body() createWorkActDto: CreateWorkActDto) {
    return this.workActService.create(createWorkActDto);
  }

  @Get()
  findAll() {
    return this.workActService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workActService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkActDto: UpdateWorkActDto) {
    return this.workActService.update(+id, updateWorkActDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workActService.remove(+id);
  }
}
