/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Napravi novu NestJS aplikaciju koristeci AppModule kao route module

   app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000); //Slusaj na portu 3000
   //await app.listen(3000, '0.0.0.0');
}
bootstrap();
