import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Worker')
@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  /*@Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }*/

  @ApiOperation({description: "Финд ол как финд ол чо бубнить то..."})
  @ApiResponse({
    status: 200,
    description: 'Работники найдены'
  })
  @ApiResponse({
    status: 404,
    description: 'Ни одного сотрудника нет'
  })
  @Get()
  async findAll() {
    const workers = await this.workerService.findAll();
    if (workers.length == 0) throw new NotFoundException('Ни одного сотрудника нет')
    return workers
  }

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
