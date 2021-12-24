import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryDto } from "./dto/category.dto";

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateServiceDto,
    isArray: true
  })
  @Get()
  @UsePipes(new ValidationPipe({transform: true}))
  async findAll(@Query('category') category?: CategoryDto) {
    const service = await this.serviceService.findByCategory(category)
      if (service.length == 0) throw new NotFoundException('Услуги не найдены')
      return service
  }

  @ApiOkResponse({
    description: 'Запрос удался',
    type: CreateServiceDto
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const service = await this.serviceService.findOne(+id);
    if (!service) throw new NotFoundException(`Сервис с номером ${id} не найден`)
    return service
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateServiceDto: UpdateServiceDto) {
    const service = await this.serviceService.findOne(+id);
    if (!service) throw new NotFoundException(`Сервис с номером ${id} не найден`)
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const service = await this.serviceService.findOne(+id);
    if (!service) throw new NotFoundException(`Сервис с номером ${id} не найден`)
    return this.serviceService.remove(+id);
  }
}
