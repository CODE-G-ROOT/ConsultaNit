import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT, SERVER_HOST } from './config/envs';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );

  await app.listen(SERVER_PORT ?? 3000);
  console.log(SERVER_PORT);
}

bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
