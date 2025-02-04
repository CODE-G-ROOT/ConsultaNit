import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { NitsService } from './nits.service';
import { CONSULTANIT_CMD } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('nits')
export class NitsController {
  constructor(
    @Inject(CONSULTANIT_CMD) private readonly consultaNitsClient: ClientProxy,
    private readonly nitsService: NitsService,
  ) {}

  @Post('/getNit')
  getNit(@Body() cc: string) {
    return this.nitsService.findNit(cc);
  }

  @Post('/getNits')
  getNits(@Body() cc: string) {
    return this.nitsService.findNit(cc);
  }

  @Get()
  findAll() {
    return this.nitsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'get all nits';
  }

  @Patch('/update/:id')
  update(@Param('id') id: string) {
    return this.nitsService.update(id);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.nitsService.remove(+id);
  }
}
