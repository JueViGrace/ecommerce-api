import { IsNumber, IsString } from 'class-validator';

export class UpdateCartWithProductsDto {
  @IsString()
  cartID: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}
