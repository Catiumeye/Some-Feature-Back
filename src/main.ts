import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    Logger.log('Fi4a started')
  });
}
bootstrap();
