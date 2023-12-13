import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVendedoresDto {
  @IsString()
  @MinLength(1)
  codigo: string;

  @IsString()
  @MinLength(4)
  nombre: string;

  @IsString()
  @MinLength(10)
  telefonos: string;

  @IsString()
  @MinLength(10)
  telefono_movil: string;

  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNumber()
  @IsOptional()
  superves?: number;

  @IsString()
  supervpor: string;

  @IsString()
  @IsOptional()
  sector?: string;

  @IsString()
  @IsOptional()
  subcodigo?: string;

  @IsNumber()
  @IsOptional()
  nivgcial?: number;

  @IsString()
  @IsOptional()
  fechamodifi?: string;

  @IsEmail()
  email: string;
}
