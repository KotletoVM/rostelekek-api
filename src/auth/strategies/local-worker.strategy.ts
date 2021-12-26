import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalWorkerStrategy extends PassportStrategy(Strategy, 'local-worker') {
  constructor(private authService: AuthService) {
    super({usernameField: 'login', passwordField: 'password'});
  }

  async validate(login: string, password: string): Promise<any> {
    const worker = await this.authService.validateWorker(login, password);
    if (!worker) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }
    return worker;
  }
}