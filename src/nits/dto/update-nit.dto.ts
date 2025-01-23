import { PartialType } from '@nestjs/mapped-types';
import { CreateNitDto } from './create-nit.dto';

export class UpdateNitDto extends PartialType(CreateNitDto) {}
