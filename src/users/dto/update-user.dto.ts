import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/roles/entities/role.entity';
import { Roles } from 'src/roles/enums/role.enum';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  codigo?: string;

  @IsEmail()
  @MinLength(4)
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(4)
  @IsOptional()
  password?: string;

  @IsNumber()
  @IsOptional()
  desactivo?: number;

  @IsString()
  @IsOptional()
  supervpor?: string;

  @IsString()
  @IsOptional()
  ult_sinc?: string;

  @IsString()
  @IsOptional()
  version?: string;

  @IsBoolean()
  @IsOptional()
  sesion?: boolean;

  @IsString()
  @IsOptional()
  almacen?: string;

  @Auth(Roles.MASTER)
  @IsOptional()
  role?: Role;
}
