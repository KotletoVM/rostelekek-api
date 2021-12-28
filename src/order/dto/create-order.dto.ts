import {
  IsNotEmpty,
  IsEmpty,
  IsInt, IsDate, IsNumber, IsDateString
} from "class-validator";
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiResponseProperty()
  @IsEmpty({message: 'Id должен быть пустым; '})
  id: number;
  @ApiResponseProperty()
  @IsEmpty({message: 'Id пользователя должен быть пустым; '})
  id_customer: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Дата заявки не должна быть пустой; '})
  @IsDateString({}, {message: 'Дата заявки должна быть датой в формате XXXX-XX-XX (y-m-d); '})
  date: Date;
  @ApiProperty()
  @IsNotEmpty({message: 'Id услуги должен быть указан; '})
  @IsInt({message: 'Id услуги должен быть целым числом; '})
  id_service: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Id оборудования должен быть указан; '})
  @IsInt({message: 'Id оборудования должен быть целым числом; '})
  id_equip: number;
  @ApiProperty()
  @IsNotEmpty({message: 'Цена заявки должна быть указана; '})
  @IsNumber({}, {message: 'Цена заявки должна быть числом; '})
  end_price: number;
}
