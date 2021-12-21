import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerModule } from '../customer/customer.module';
import { WorkerModule } from '../worker/worker.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [WorkerModule, CustomerModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
