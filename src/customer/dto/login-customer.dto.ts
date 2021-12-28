import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginCustomerDto{
  @ApiProperty()
  @IsNotEmpty({message: 'Email необходимо заполнить; '})
  @IsEmail({message: 'Email должен быть указан корректно; '})
  email: string
}