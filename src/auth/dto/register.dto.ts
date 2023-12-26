import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  nombre: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  codigo: string;

  @Transform(({ value }) => value.trim())
  @IsEmail()
  @MinLength(4)
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  password: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  phone: string;
}
