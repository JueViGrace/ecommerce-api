import { Transform } from 'class-transformer';

export class CreateProductDto {
  @Transform(({ value }) => value.trim())
  codigo: string;
  @Transform(({ value }) => value.trim())
  comprometido: number;
  @Transform(({ value }) => value.trim())
  dctotope: number;
  @Transform(({ value }) => value.trim())
  discont: number;
  @Transform(({ value }) => value.trim())
  enpreventa: string;
  @Transform(({ value }) => value.trim())
  existencia: number;
  @Transform(({ value }) => value.trim())
  fechamodifi: string;
  @Transform(({ value }) => value.trim())
  grupo: string;
  @Transform(({ value }) => value.trim())
  marca: string;
  @Transform(({ value }) => value.trim())
  nombre: string;
  @Transform(({ value }) => value.trim())
  precio1: number;
  @Transform(({ value }) => value.trim())
  precio2: number;
  @Transform(({ value }) => value.trim())
  precio3: number;
  @Transform(({ value }) => value.trim())
  precio4: number;
  @Transform(({ value }) => value.trim())
  precio5: number;
  @Transform(({ value }) => value.trim())
  precio6: number;
  @Transform(({ value }) => value.trim())
  precio7: number;
  @Transform(({ value }) => value.trim())
  referencia: string;
  @Transform(({ value }) => value.trim())
  subgrupo: string;
  @Transform(({ value }) => value.trim())
  unidad: string;
  @Transform(({ value }) => value.trim())
  vtaMax: number;
  @Transform(({ value }) => value.trim())
  vtaMin: number;
  @Transform(({ value }) => value.trim())
  vtaMinenx: number;
  @Transform(({ value }) => value.trim())
  vtaSolofac: number;
  @Transform(({ value }) => value.trim())
  vtaSolone: number;
}
