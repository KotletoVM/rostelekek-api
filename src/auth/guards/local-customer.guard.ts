import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalCustomerGuard extends AuthGuard('local-customer'){
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('Необходимо заполнить все поля');
    }
    return user;
  }
}