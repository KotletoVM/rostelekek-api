import {
  IsNotEmpty,
  IsEmpty,
  IsInt, IsDate, IsNumber,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id_customer: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
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
