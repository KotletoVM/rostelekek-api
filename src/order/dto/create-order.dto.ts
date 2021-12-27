import {
  IsNotEmpty,
  IsEmpty,
  IsInt, IsDate, IsNumber, IsDateString
} from "class-validator";
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiResponseProperty()
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_customer: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_service: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_equip: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  end_price: number;
}
