import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber, IsDate, IsInt
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateWorkActDto {
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
  @IsDate()
  start_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  finish_date: Date;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state: string;
}
