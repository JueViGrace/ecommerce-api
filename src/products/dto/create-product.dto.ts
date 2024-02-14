import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class CreateProductDto {
  @IsString()
  codigo: string;

  @IsString()
  nombre: string;

  @IsString()
  referencia: string;

  @IsNumber()
  existencia: number;

  @IsString()
  marca: string;

  @IsNotEmpty()
  category: Category;

  @IsString()
  subgrupo: string;

  @IsString()
  productImage: string;

  @IsNumber()
  precio1: number;

  @IsNumber()
  @IsOptional()
  precio2: number;

  @IsNumber()
  @IsOptional()
  precio3: number;

  @IsNumber()
  @IsOptional()
  precio4: number;

  @IsNumber()
  @IsOptional()
  precio5: number;

  @IsNumber()
  @IsOptional()
  precio6: number;

  @IsNumber()
  @IsOptional()
  precio7: number;

  @IsNumber()
  @IsOptional()
  comprometido?: number;

  @IsNumber()
  @IsOptional()
  dctotope?: number;

  @IsNumber()
  @IsOptional()
  discont?: number;

  @IsString()
  @IsOptional()
  enpreventa?: string;

  @IsString()
  @IsOptional()
  unidad?: string;

  @IsNumber()
  @IsOptional()
  vtaMax?: number;

  @IsNumber()
  @IsOptional()
  vtaMin?: number;

  @IsNumber()
  @IsOptional()
  vtaMinenx?: number;

  @IsNumber()
  @IsOptional()
  vtaSolofac?: number;

  @IsNumber()
  @IsOptional()
  vtaSolone?: number;
}
