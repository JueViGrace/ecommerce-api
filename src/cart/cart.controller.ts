import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { UpdateCartWithProductsDto } from './dto/update-cart-products.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  updateCartWithProducts(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartWithProductsDto[],
  ) {
    return this.cartService.updateCartWithProducts(id, updateCartDto);
  }

  @Delete(':id')
  emptyCartProducts(@Param('id') id: string) {
    return this.cartService.emptyCartProducts(id);
  }

  @Delete(':id/:productId')
  deleteOneProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.deleteOneProduct(id, productId);
  }
}
