import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateEquipmentDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number
  @ApiProperty()
  @IsNotEmpty({message: 'Название должно быть указано; '})
  @IsString({message: 'Название должно быть строкой; '})
  name: string
  @ApiProperty()
  @IsNotEmpty({message: 'Цена должна быть указана; '})
  @IsNumber({}, {message: 'Цена должна быть числом; '})
  price: number
  @ApiPropertyOptional()
  @IsString({message: 'Описание должно быть строкой; '})
  notes: string
}
