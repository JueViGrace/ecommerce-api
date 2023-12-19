import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  codigo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  nombre: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  referencia: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  existencia: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  marca: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  grupo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  subgrupo: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  precio1: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio2: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio3: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio4: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio5: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio6: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  precio7: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  comprometido?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  dctotope?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  discont?: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  enpreventa?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  @IsOptional()
  fechamodifi?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  unidad?: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  vtaMax?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  vtaMin?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  vtaMinenx?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  vtaSolofac?: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  vtaSolone?: number;
}
