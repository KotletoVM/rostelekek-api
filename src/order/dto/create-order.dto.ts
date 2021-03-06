import {
  IsNotEmpty,
  IsEmpty,
  IsInt, IsDate, IsNumber, IsDateString, IsString, MaxLength, IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiResponseProperty()
  @IsEmpty({message: 'Id пользователя должен быть пустым; '})
  id_customer: number;
  @ApiResponseProperty()
  @IsEmpty({message: 'Дата создания пользователя устанавливается автоматически; '})
  date: Date;
  @ApiProperty()
  @IsNotEmpty({message: 'Id услуги должен быть указан; '})
  @IsInt({message: 'Id услуги должен быть целым числом; '})
  id_service: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt({message: 'Id оборудования должен быть целым числом; '})
  id_equip: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Цена заявки должна быть указана; '})
  @IsNumber({}, {message: 'Цена заявки должна быть числом; '})
  end_price: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Улица должна быть указана; '})
  @IsString({message: 'Улица должна быть строкой; '})
  @MaxLength(64, {message: 'Максимальная длина названия улицы 64 символа; '})
  street: string;
  @ApiProperty()
  @IsNotEmpty({message: 'Номер дома должен быть указан; '})
  @IsNumber({}, {message: 'Номер дома должен быть целым числом; '})
  home: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Номер квартиры должен быть указан; '})
  @IsNumber({}, {message: 'Номер квартиры должен быть целым числом; '})
  flat: number;
}
