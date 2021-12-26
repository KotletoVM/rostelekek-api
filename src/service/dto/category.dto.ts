import { IsEnum } from "class-validator";
import { category } from "../../enums/category.enum";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CategoryDto{
  @ApiPropertyOptional()
  @IsEnum(category, {message: 'Указанная категория не найдена'})
  category: string = '3in1'
}