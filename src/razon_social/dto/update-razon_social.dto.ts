import { PartialType } from '@nestjs/mapped-types';
import { CreateRazonSocialDto } from './create-razon_social.dto';

export class UpdateRazonSocialDto extends PartialType(CreateRazonSocialDto) {}
