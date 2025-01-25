import { Injectable } from '@nestjs/common';
import { CreateNitDto } from './dto/create-nit.dto';
import { UpdateNitDto } from './dto/update-nit.dto';
import { Nit } from './interface/nit.interface';

@Injectable()
export class NitsService {
  private nits: Nit[] = [];

  create(nit: CreateNitDto) {
    const {
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      state,
      description_state,
    } = nit;

    this.nits.push({
      id: this.nits.length + 1,
      firstName: firstName,
      secondName: secondName,
      firstLastName: firstLastName,
      secondLastName: secondLastName,
      state: state,
      description_state: description_state,
      updated_at: new Date(),
      created_at: new Date(),
    });

    return 'Nit created successfully';
  }

  findAll() {
    return this.nits;
  }

  findOne(id: number) {
    return this.nits.find((nit) => nit.id === id);
  }

  update(id: number, updateNitDto: UpdateNitDto) {
    const nit = this.nits.find((nit) => nit.id === id);

    if (!nit) {
      return 'Nit not found';
    }

    const values = Object.keys(updateNitDto);

    console.log(values);

    // this.nits[id].updated_at = new Date();
    nit.updated_at = new Date();

    return `This action updates a #${id} nit`;
  }

  remove(id: number) {
    const index = this.nits.findIndex((nit) => nit.id === id);

    if (index !== -1) {
      this.nits.splice(index, 1);
    }

    console.log(this.nits);

    return `This action removes a #${id} nit`;
  }
}
