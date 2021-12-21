import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {cors} from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  //const configService: ConfigService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('ARTART')
    .setDescription('ARTART API description')
    .setVersion('1.0')
    .addTag('auth', 'операции, связанные с аутентификацией')
    .addTag('customer', 'операции, связанные с пользователями')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
