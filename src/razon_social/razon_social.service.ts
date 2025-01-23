import { Injectable } from '@nestjs/common';
import { CreateRazonSocialDto } from './dto/create-razon_social.dto';
import { UpdateRazonSocialDto } from './dto/update-razon_social.dto';

@Injectable()
export class RazonSocialService {
  create(createRazonSocialDto: CreateRazonSocialDto) {
    return 'This action adds a new razonSocial';
  }

  findAll() {
    return `This action returns all razonSocial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} razonSocial`;
  }

  update(id: number, updateRazonSocialDto: UpdateRazonSocialDto) {
    return `This action updates a #${id} razonSocial`;
  }

  remove(id: number) {
    return `This action removes a #${id} razonSocial`;
  }
}
