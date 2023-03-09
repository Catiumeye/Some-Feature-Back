import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Some feature project')
    .setDescription('<div>Project to nothing.</br>Autism it\'s funny</div>')
    .setVersion('1.0')
    .setContact('Catiumeye', 'https://t.me/typa_art', 'catiumeye@gmail.com')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    Logger.log(`Fi4a started ${process.env.SERVER_HOST} ${process.env.SERVER_PORT}`)
  });
}
bootstrap();
