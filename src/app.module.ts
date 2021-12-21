import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {config} from './config/configuration'
import {DatabaseConfig} from './config/database.config'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, load: [config]
  }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseConfig,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}}
