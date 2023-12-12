import { IsString } from 'class-validator';

export class SyncUserDto {
  @IsString()
  vendedor: string;

  @IsString()
  ultSinc: string;

  @IsString()
  version: string;
}
