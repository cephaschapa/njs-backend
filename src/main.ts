import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Post API')
    .setDescription(
      'The Post API description, use the base API URL as http://localhost:3300/',
    )
    .setTermsOfService('https://localhost:3300/terms')
    .setLicense(
      'MIT',
      'https://github.com/DefinitelyTyped/docs/blob/master/LICENSE-MIT',
    )
    .addServer('http://localhost:3300')
    .setVersion('1.0')
    .build();

  // Instance of the SwaggerModule
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3300);
}
bootstrap();
