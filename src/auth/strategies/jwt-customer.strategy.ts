import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { CustomerService } from '../../customer/customer.service';

@Injectable()
export class JwtCustomerStrategy extends PassportStrategy(Strategy, 'jwt-customer'){
  constructor(private readonly configService: ConfigService,
              private readonly customerService: CustomerService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('access_token.publicKey'),
      algorithms: ['RS256']
    });
  }

  async validate(payload: {sub: number, email: string }) {
    const data = { id: payload.sub, email: payload.email };
    const customer = await this.customerService.findOneByCond(data)
    if (!customer){
      throw new UnauthorizedException('User not found');
    }
    customer.password = null
    return customer;//была data
  }
}