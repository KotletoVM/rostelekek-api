import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerModule } from '../customer/customer.module';
import { WorkerModule } from '../worker/worker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalWorkerStrategy } from './strategies/local-worker.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalCustomerStrategy } from './strategies/local-customer.strategy';
import { JwtWorkerStrategy } from './strategies/jwt-worker.strategy';
import { JwtCustomerStrategy } from './strategies/jwt-customer.strategy';

@Module({
  imports: [WorkerModule, CustomerModule, WorkerModule, ConfigModule, JwtModule.register({
    signOptions: {algorithm: 'RS256'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalWorkerStrategy, LocalCustomerStrategy, JwtWorkerStrategy, JwtCustomerStrategy]
})
export class AuthModule {
}
