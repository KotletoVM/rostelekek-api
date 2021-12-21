import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Matches,
  IsOptional,
  IsUrl,
  IsEmpty,
  MinLength,
  Length,
  IsInt, IsDate
} from "class-validator";
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
}
