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
    .setTitle('Rostelekom-API')
    .setDescription('Ком или кек?')
    .setVersion('1.0')
    .addTag('Auth', 'операции, связанные с аутентификацией')
    .addTag('Customer', 'операции, связанные с пользователями')
    .addTag('Worker', 'операции, связанные с сотрудниками')
    .addTag('WorkAct', 'операции, связанные с актами работы')
    .addTag('Order', 'операции, связанные с заказами')
    .addTag('Service', 'операции, связанные с услугами')
    .addTag('Equipment', 'операции, связанные с оборудованием')
    .addBearerAuth({ type: 'http', description: 'Авторизация для аутентифицированных сотрудников', bearerFormat: 'JWT' }, 'jwt-worker')
    .addBearerAuth({type: 'http', description: 'Авторизация для аутентифицированных пользователей', bearerFormat: 'JWT'}, 'jwt-customer')
    .addBasicAuth({type: 'http', scheme: 'Basic', description: 'Аутентификация сотрудников по логину и паролю'}, 'local-worker')
    .addBasicAuth({type: 'http', scheme: 'Basic', description: 'Аутентификация пользователей по емейлу и паролю'}, 'local-customer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
