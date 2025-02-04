import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './routes/users_nits/users.module';
import { RegisterModule } from './routes/register/register.module';
import { RazonSocialModule } from './routes/razon_social/razon_social.module';
import { NitsModule } from './routes/nits/nits.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3301,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true, // sincroniza la base de datos con las entidades segun los cambios que se hagan en dev TODO: NO DEBE ESTAR ACTIVADO EN PROD
    }),
  ],
})
export class AppModule {}
