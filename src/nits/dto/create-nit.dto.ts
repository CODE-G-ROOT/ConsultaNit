import { IsString } from 'class-validator';

export class CreateNitDto {
  @IsString()
  public firstName: string;

  @IsString()
  public secondName: string;

  @IsString()
  public firstLastName: string;

  @IsString()
  public secondLastName: string;

  @IsString()
  public state: string;

  @IsString()
  public description_state: string;
}
