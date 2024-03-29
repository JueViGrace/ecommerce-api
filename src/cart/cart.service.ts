import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartWithProductsEntity } from './entities/cartWithProducts.entity';
import { UpdateCartWithProductsDto } from './dto/update-cart-products.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(CartWithProductsEntity)
    private readonly cartWithProductsRepository: Repository<CartWithProductsEntity>,
    private readonly productService: ProductsService,
  ) {}

  async create(createCartDto: CreateCartDto) {
    await this.findNotExistingCart(createCartDto.id);
    return await this.cartRepository.save(createCartDto);
  }

  async findOne(id: string) {
    return await this.findExistingCart(id);
  }

  async updateCartWithProducts(
    id: string,
    updateCartDto: UpdateCartWithProductsDto[],
  ) {
    await this.findExistingCart(id);

    for (const item in updateCartDto) {
      const product = updateCartDto[item];
      await this.productService.validateProductStock(
        product.productId,
        product.quantity,
      );
      await this.cartWithProductsRepository.save({
        cartId: id,
        productId: product.productId,
        quantity: product.quantity,
      });
    }

    return 'Saved!';
  }

  async remove(id: string) {
    await this.findExistingCart(id);
    await this.cartRepository.softDelete(id);
    return `Cart ${id} was deleted.`;
  }

  async emptyCartProducts(id: string) {
    const cart = await this.findExistingCart(id);
    await this.cartWithProductsRepository.remove(cart.cartWithProducts);
    return 'Cart emptied';
  }

  async deleteOneProduct(id: string, productId: string) {
    await this.findExistingCart(id);

    const cart = await this.cartWithProductsRepository.find({
      where: [{ cartId: id, productId: productId }],
    });

    if (cart.length === 0) {
      throw new BadRequestException('This product is not currently added');
    }

    await this.cartWithProductsRepository
      .createQueryBuilder()
      .delete()
      .where('cartId = :cartId', { cartId: id })
      .andWhere('productId = :productId', { productId: productId })
      .execute();

    const newCart = await this.cartWithProductsRepository.find({
      where: [{ cartId: id }],
    });

    return newCart;
  }

  async enroll(id: string) {
    const cart = await this.findExistingCart(id);

    await this.cartWithProductsRepository.remove(cart.cartWithProducts);

    return 'Ok!';
  }

  /* ----------- Validation methods ----------- */

  private async findExistingCart(id: string) {
    const cart = await this.cartRepository.findOne({
      where: [{ id }],
    });

    if (!cart) {
      throw new BadRequestException(`Cart with id ${id} doesn't exists`);
    }

    return cart;
  }

  private async findNotExistingCart(id: string) {
    const cart = await this.cartRepository.findOne({
      where: [{ id }],
    });

    if (cart) {
      throw new BadRequestException(`Cart with id ${id} already exists`);
    }

    return cart;
  }
}
