export class RazonSocial {}
import { OmitType } from '@nestjs/mapped-types';
import { Nit } from 'src/routes/nits/entities/nit.entity';
import { Entity, Column } from 'typeorm';

@Entity('empresas') // Nueva tabla "empresas"
export class Empresa extends OmitType(Nit, [
  'firstName',
  'secondName',
  'firstLastName',
  'secondLastName',
] as const) {
  @Column({ type: 'varchar', length: 255 })
  razon_social: string;
}
