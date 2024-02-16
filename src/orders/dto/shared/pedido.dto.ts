import { IsNotEmpty } from 'class-validator';
import { CabeceraDto } from './cabecera.dto';

export class PedidoDto {
  @IsNotEmpty()
  Cabecera: CabeceraDto;
}
