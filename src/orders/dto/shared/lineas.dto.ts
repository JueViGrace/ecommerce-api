import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class LineasDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  kmv_codart: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kmv_nombre: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kti_tipprec: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kmv_cant: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_ndoc: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kmv_stot: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kmv_artprec: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kmv_dctolin: number;
}
