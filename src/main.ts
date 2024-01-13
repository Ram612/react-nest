// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Load environment variables from .env file
   dotenv.config();

  app.enableCors({
    origin: 'http://localhost:3000', // Update with the origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3001);
}

bootstrap();
