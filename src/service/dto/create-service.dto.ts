import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateServiceDto {
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  internet: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tv: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobile: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
