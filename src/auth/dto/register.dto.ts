import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  nombre: string;

  @IsEmail()
  @MinLength(4)
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  password: string;

  @IsString()
  codigo: string;

  @IsString()
  @IsOptional()
  almacen?: string;

  @IsNumber()
  @IsOptional()
  desactivo?: number;

  @IsString()
  @IsOptional()
  fechamodifi?: string;

  @IsNumber()
  @IsOptional()
  ualterprec?: number;

  @IsString()
  @IsOptional()
  sesionactiva?: string;

  @IsString()
  @IsOptional()
  ult_sinc?: string;

  @IsString()
  @IsOptional()
  version?: string;

  @IsNumber()
  @IsOptional()
  sesion?: number;
}
