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
  IsInt, MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { Column } from 'typeorm';


export class CreateCustomerDto {
  //@ApiPropertyOptional()
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить имя; '})
  @IsString({message: 'Имя должно быть строкой; '})
  name: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить фамилию; '})
  @IsString({message: 'Фамилия должна быть строкой; '})
  surname: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить email; '})
  @IsEmail({message: 'Email должен быть указан корректно; '})
  email: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить пароль; '})
  @IsString({message: 'Пароль должен быть строкой; '})
  @MinLength(6, {message: "Пароль должен быть не менее 6 символов; "})
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Пароль должен содержать буквы и цифры; ' })
  password: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить телефон; '})
  @IsString({message: 'Телефон должен быть строкой; '})
  @Matches(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    {message: 'Телефон должен быть введен в правильном формате; ' })
  phone: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Улица должен быть строкой; '})
  @MaxLength(64)
  street: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  home: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  flat: number;
  @ApiResponseProperty()
  @IsEmpty({message: 'Лицевой счет должен быть пустым; '})
  personal_account: string;
  @IsEmpty({message: 'Поле для проверки подтверждения email устанавливается автоматически; '})
  isEmailConfirmed: boolean;
  @IsEmpty({message: 'Дата создания пользователя устанавливается автоматически; '})
  createdAt: Date
  @IsEmpty({message: 'Дата обновления пользователя устанавливается автоматически; '})
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
