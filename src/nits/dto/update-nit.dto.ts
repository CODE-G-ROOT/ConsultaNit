import { PartialType } from '@nestjs/mapped-types';
import { CreateNitDto } from './create-nit.dto';
import { IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateNitDto extends PartialType(CreateNitDto) {
  @IsString()
  @Optional()
  public firstName: string;

  @IsString()
  @Optional()
  public secondName: string;

  @IsString()
  @Optional()
  public firstLastName: string;

  @IsString()
  @Optional()
  public secondLastName: string;

  @IsString()
  @Optional()
  public state: string;

  @IsString()
  @Optional()
  public description_state: string;
}
