import { IsNotEmpty } from 'class-validator';
import { PedidoDto } from './pedido.dto';

export class CreatePedidoDto {
  @IsNotEmpty()
  Pedido: PedidoDto[];
}
