import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  Matches, MinLength, IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { position } from '../../enums/position.enum';

export class CreateWorkerDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить логин; '})
  @IsString({message: 'Логин должен быть строкой; '})
  login: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить пароль; '})
  @IsString({message: 'Пароль должен быть строкой; '})
  @MinLength(6, {message: "Пароль должен быть не менее 6 символов; "})
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Пароль должен содержать буквы и цифры; ' })
  password: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message: 'Опыт должен быть строкой; '})
  experience: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Необходимо заполнить имя; '})
  @IsString({message: 'Имя должно быть строкой; '})
  name: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Позиция сотрудника должна быть заполнена; '})
  @IsEnum(position, {message: 'Позиция сотрудника должна быть выбрана из: Администратор, Диспетчер, Исполнитель; '})
  position: string;
}
