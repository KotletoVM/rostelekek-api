import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  Matches, MinLength
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateWorkerDto {
  @ApiPropertyOptional()
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  login: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {message: "Пароль должен быть не менее 6 символов"})
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Пароль должен содержать буквы и цифры\n' })
  password: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  experience: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  position: string;
}
