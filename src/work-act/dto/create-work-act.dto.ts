import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber, IsDate, IsInt, IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateWorkActDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Id заявки должен быть указан; '})
  @IsInt({message: 'Id заявки должен быть целым числом; '})
  id_order: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Id сотрудника должен быть указан; '})
  @IsInt({message: 'Id сотрудника должен быть целым числом; '})
  id_worker: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString({},{message: 'Дата начала выполнения заявки должна быть датой в формате XXXX-XX-XX (y-m-d); '})
  start_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString({},{message: 'Дата окончания выполнения заявки должна быть датой в формате XXXX-XX-XX (y-m-d); '})
  finish_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Состояние должно быть строкой; '})
  state: string;
}
