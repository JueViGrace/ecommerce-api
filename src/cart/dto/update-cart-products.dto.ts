import { IsNumber, IsString } from 'class-validator';

export class UpdateCartWithProductsDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}
