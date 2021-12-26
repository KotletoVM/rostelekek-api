import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginWorkerDto{
  @ApiProperty()
  @IsNotEmpty({message: 'Поле логина необходимо заполнить'})
  @IsString()
  login: string
}