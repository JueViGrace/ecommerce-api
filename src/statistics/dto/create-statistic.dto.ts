import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateStatisticDto {
  @Transform(({ value }) => value.trim())
  @IsNumber()
  clivisit: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  cntclientes: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  cntfacturas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  cntpedidos: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  cntrecl: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  codcoord: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  defdolTotneto: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  devdolTotneto: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  fechaEstad: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  lomMontovtas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  lomPrcvisit: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  lomPrcvtas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  metavend: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  mtofacturas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  mtopedidos: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  mtorecl: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  nombrevend: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  nomcoord: string;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  ppgdolTotneto: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  prcmeta: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  prcvisitas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  rlomMontovtas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  rlomPrcvisit: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  rlomPrcvtas: number;

  @Transform(({ value }) => value.trim())
  @IsNumber()
  totdolcob: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  vendedor: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  user: string;
}
