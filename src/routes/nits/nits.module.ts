import { Module } from '@nestjs/common';
import { NitsService } from './nits.service';
import { NitsController } from './nits.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  CONSULTANIT_CMD,
  CONSULTANIT_HOST,
  CONSULTANIT_PORT,
} from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONSULTANIT_CMD, // connecion con el servicio de CONSUTLANITS
        transport: Transport.TCP,
        options: {
          host: CONSULTANIT_HOST, // el mismo host que el servciio
          port: CONSULTANIT_PORT, // el mismo puerto que el servicio
        },
      },
    ]),
  ],
  controllers: [NitsController],
  providers: [NitsService],
})
export class NitsModule {}
