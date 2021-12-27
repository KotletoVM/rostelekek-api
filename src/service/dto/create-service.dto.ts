import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber, IsIn, IsEnum
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { category } from "../../enums/category.enum";

export class CreateServiceDto {
  @ApiPropertyOptional()
  @IsEmpty({message: 'Id нельзя писать; '})
  id: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Категорию необходимо заполнить; '})
  @IsEnum(category)
  category: string;
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
