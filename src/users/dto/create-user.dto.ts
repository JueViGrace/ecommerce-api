import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(4)
  password: string;

  @IsString()
  vendedor: string;

  @IsString()
  almacen?: string;

  @IsNumber()
  desactivo?: number;

  @IsString()
  sesionactiva?: string;

  @IsString()
  ult_sinc?: string;

  @IsString()
  version?: string;

  @IsNumber()
  sesion?: number;
}
