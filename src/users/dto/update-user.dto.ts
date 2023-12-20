import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  nombre?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  codigo?: string;

  @Transform(({ value }) => value.trim())
  @IsEmail()
  @MinLength(4)
  @IsOptional()
  email?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  @IsOptional()
  password?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  supervpor?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  ult_sinc?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  fechamodifi?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  version?: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  @IsOptional()
  sesion?: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  almacen?: string;
}
