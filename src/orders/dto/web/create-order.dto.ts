import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  id: string;

  @IsString()
  cartId: string;
}
