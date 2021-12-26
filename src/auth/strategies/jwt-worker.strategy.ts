import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { WorkerService } from '../../worker/worker.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtWorkerStrategy extends PassportStrategy(Strategy, 'jwt-worker'){
  constructor(private readonly workerService: WorkerService,
              private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('access_token.publicKey'),
      algorithms: ['RS256']
    });
  }

  async validate(payload: {sub: number, login: string }) {
    const data = { id: payload.sub, login: payload.login };
    const worker = await this.workerService.findOneByCond(data)
    if (!worker){
      throw new UnauthorizedException('User not found');
    }
    worker.password = null
    return worker;//была data
  }
}
