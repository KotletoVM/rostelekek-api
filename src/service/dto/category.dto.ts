import { IsEnum } from "class-validator";
import { category } from "../../enums/category.enum";

export class CategoryDto{
  @IsEnum(category)
  cat: string
}