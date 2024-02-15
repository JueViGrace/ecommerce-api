import { IsNotEmpty, IsString } from 'class-validator';
import { CartEntity } from 'src/cart/entities/cart.entity';

export class CreateOrderDto {
  @IsString()
  id: string;

  @IsNotEmpty()
  cart: CartEntity;
}
