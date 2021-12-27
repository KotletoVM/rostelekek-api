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
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_order: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_worker: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  start_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  finish_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state: string;
}
