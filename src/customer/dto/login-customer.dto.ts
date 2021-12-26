import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCustomerDto{
  @ApiProperty()
  @IsNotEmpty({message: 'Email необходимо заполнить'})
  @IsString()
  email: string
}