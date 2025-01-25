import { Module } from '@nestjs/common';
import { NitsService } from './nits.service';
import { NitsController } from './nits.controller';

@Module({
  controllers: [NitsController],
  providers: [NitsService],
})
export class NitsModule {}
