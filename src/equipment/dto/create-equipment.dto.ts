import { IsEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateEquipmentDto {
  @ApiResponseProperty()
  @IsEmpty()
  id: number
  @ApiProperty()
  @IsString()
  name: string
  @ApiProperty()
  @IsNumber()
  price: number
  @ApiPropertyOptional()
  @IsString()
  notes: string
}
