import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './routes/users/users.module';
import { RegisterModule } from './routes/register/register.module';
import { RazonSocialModule } from './routes/razon_social/razon_social.module';
import { NitsModule } from './routes/nits/nits.module';
import { LoggerMiddleware } from './logger/logger.middleware';
// import { TypeOrmModule } from '@nestjs/typeorm';

class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

@Module({
  imports: [
    UsersModule,
    RegisterModule,
    RazonSocialModule,
    NitsModule,
    LoggerModule,
  ],
})
export class AppModule {}
