import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { LineasDto } from './lineas.dto';

export class CabeceraDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  kti_ndoc: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_codcli: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_nombrecli: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_codven: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_docsol: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  kti_condicion: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kti_tipprec: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  kti_totneto: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  kti_negesp?: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  dolarflete: number;

  @IsArray()
  Lineas: LineasDto[];
}
