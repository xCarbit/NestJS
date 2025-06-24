/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Napravi novu NestJS aplikaciju koristeci AppModule kao route module
  await app.listen(process.env.PORT ?? 3000); //Slusaj na portu 3000
}
bootstrap();
