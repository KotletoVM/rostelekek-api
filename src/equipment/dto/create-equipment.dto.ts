import { IsEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateEquipmentDto {
  @ApiPropertyOptional()
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
