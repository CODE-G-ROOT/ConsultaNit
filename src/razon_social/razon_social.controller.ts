import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RazonSocialService } from './razon_social.service';
import { CreateRazonSocialDto } from './dto/create-razon_social.dto';
import { UpdateRazonSocialDto } from './dto/update-razon_social.dto';

@Controller('razon-social')
export class RazonSocialController {
  constructor(private readonly razonSocialService: RazonSocialService) {}

  @Post()
  create(@Body() createRazonSocialDto: CreateRazonSocialDto) {
    return this.razonSocialService.create(createRazonSocialDto);
  }

  @Get()
  findAll() {
    return this.razonSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.razonSocialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRazonSocialDto: UpdateRazonSocialDto) {
    return this.razonSocialService.update(+id, updateRazonSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razonSocialService.remove(+id);
  }
}
