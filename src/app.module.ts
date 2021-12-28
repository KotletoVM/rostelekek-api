import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {config} from './config/configuration'
import {DatabaseConfig} from './config/database.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ServiceModule } from './service/service.module';
import { WorkerModule } from './worker/worker.module';
import { WorkActModule } from './work-act/work-act.module';
import { EquipmentModule } from './equipment/equipment.module';
import { CustomerModule } from './customer/customer.module';
import { EmailModule } from './email/email.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, load: [config]
  }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseConfig,
  }),
    CustomerModule,
    AuthModule,
    OrderModule,
    ServiceModule,
    WorkerModule,
    WorkActModule,
    EquipmentModule,
    EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}}
