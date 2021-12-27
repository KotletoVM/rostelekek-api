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
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";


export class CreateCustomerDto {
  //@ApiPropertyOptional()
  @ApiResponseProperty()
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surname: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {message: "Пароль должен быть не менее 6 символов"})
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Пароль должен содержать буквы и цифры\n' })
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/,
    {message: 'Телефон должен быть введен в правильном формате\n' })
  phone: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address: string;
  @ApiResponseProperty()
  @IsEmpty()
  personal_account: string;
  @IsEmpty()
  isEmailConfirmed: boolean;
  @IsEmpty()
  createdAt: Date
  @IsEmpty()
  updatedAt: Date
}

/*export class CreateCustomerDto {
  @IsEmpty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {message: "Пароль должен быть не менее 6 символов"})
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Пароль должен содержать буквы и цифры\n' })
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/,
    {message: 'Телефон должен быть введен в правильном формате\n' })
  phone: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  personal_account: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3, 15, {message: "Длина логина должна быть не менее 3-х и не более 15-ти символов"})
  login: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  userpic: string;
  @IsEmpty()
  isEmailConfirmed: boolean;
  @IsEmpty()
  createdAt: Date
  @IsEmpty()
  updatedAt: Date
}*/
