import { Module } from '@nestjs/common';
import { RazonSocialService } from './razon_social.service';
import { RazonSocialController } from './razon_social.controller';

@Module({
  controllers: [RazonSocialController],
  providers: [RazonSocialService],
})
export class RazonSocialModule {}
