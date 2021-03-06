import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Res, UseGuards } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtWorkerGuard } from '../auth/guards/jwt-worker.guard';

@ApiTags('Worker')
@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  /*@Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }*/

  @ApiOkResponse({
    description: "Запрос удался",
    type: CreateWorkerDto,
    isArray: true
  })
  @ApiBearerAuth('jwt-worker')
  //@UseGuards(JwtWorkerGuard)
  @Get()
  async findAll() {
    const workers = await this.workerService.findAll();
    if (workers.length == 0) throw new NotFoundException('Ни одного сотрудника нет')
    return workers
  }

  @ApiOkResponse({
    description: "Запрос удался",
    type: CreateWorkerDto
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const worker = await this.workerService.findOne(+id)
    if (!worker) throw new NotFoundException('Сотрудник не найден')
    return worker
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    const worker = await this.workerService.findOne(+id)
    if (!worker) throw new NotFoundException('Сотрудник не найден')
    return this.workerService.update(+id, updateWorkerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const worker = await this.workerService.findOne(+id)
    if (!worker) throw new NotFoundException('Сотрудник не найден')
    return this.workerService.remove(+id);
  }
}
