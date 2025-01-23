import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RegisterModule } from './register/register.module';
import { RazonSocialModule } from './razon_social/razon_social.module';
import { NitsModule } from './nits/nits.module';

@Module({
  imports: [UsersModule, RegisterModule, RazonSocialModule, NitsModule],
})
export class AppModule {}
