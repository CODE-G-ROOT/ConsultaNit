import { Injectable } from '@nestjs/common';
import { CreateNitDto } from './dto/create-nit.dto';
import { UpdateNitDto } from './dto/update-nit.dto';

@Injectable()
export class NitsService {
  create(createNitDto: CreateNitDto) {
    return 'This action adds a new nit';
  }

  findAll() {
    return `This action returns all nits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nit`;
  }

  update(id: number, updateNitDto: UpdateNitDto) {
    return `This action updates a #${id} nit`;
  }

  remove(id: number) {
    return `This action removes a #${id} nit`;
  }
}
