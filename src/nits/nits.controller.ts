import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NitsService } from './nits.service';
import { CreateNitDto } from './dto/create-nit.dto';
import { UpdateNitDto } from './dto/update-nit.dto';

@Controller('nits')
export class NitsController {
  constructor(private readonly nitsService: NitsService) {}

  @Post()
  create(@Body() createNitDto: CreateNitDto) {
    return this.nitsService.create(createNitDto);
  }

  @Get()
  findAll() {
    return this.nitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNitDto: UpdateNitDto) {
    return this.nitsService.update(+id, updateNitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nitsService.remove(+id);
  }
}
