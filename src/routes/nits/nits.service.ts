import { Injectable } from '@nestjs/common';

@Injectable()
export class NitsService {
  // private nits: string = [];

  findNit(cc: string) {
    return `Nit ${cc} created successfully `;
  }

  findAll() {
    return 'find all';
  }

  findOneNit(id: string) {
    return `${id} found successfully`;
  }

  update(id: string) {
    return `This action updates a #${id} nit`;
  }

  remove(id: number) {
    // const index = this.nits.findIndex((nit) => nit.id === id);

    // if (index !== -1) {
    //   this.nits.splice(index, 1);
    // }

    // console.log(this.nits);

    return `This action removes a #${id} nit`;
  }
}
