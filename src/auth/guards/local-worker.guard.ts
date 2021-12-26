import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalWorkerGuard extends AuthGuard('local-worker') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('Необходимо заполнить все поля');
    }
    return user;
  }
}