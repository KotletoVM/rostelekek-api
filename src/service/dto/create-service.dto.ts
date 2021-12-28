import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsNumber, IsIn, IsEnum
} from "class-validator";
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { category } from "../../enums/category.enum";

export class CreateServiceDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Категорию необходимо заполнить; '})
  @IsEnum(category, {message: 'Категория должна быть выбрана из следующих вариантов: 2 в 1, 3 в 1, 4 в 1, Домашний Интернет, Видеонаблюдение; '})
  category: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Название необходимо заполнить; '})
  @IsString({message: 'Название должно быть строкой; '})
  name: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Интернет должен быть строкой; '})
  internet: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Телевидение должно быть строкой; '})
  tv: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Онлайн-кинотеатр должен быть строкой; '})
  films: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Мобильная связь должна быть строкой; '})
  mobile: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Видеонаблюдение должно быть строкой; '})
  video: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, {message: 'Цена должна быть числом; '})
  price: number;
}
