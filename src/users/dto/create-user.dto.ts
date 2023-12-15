import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsString()
  @MinLength(4)
  username: string;

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
