import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber, IsDate, IsInt
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Order } from "../../order/entities/order.entity";
import { Worker } from "../../worker/entities/worker.entity";

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
  equipment: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state: string;
}
