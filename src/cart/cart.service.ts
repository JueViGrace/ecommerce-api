import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    await this.findExistingCart(createCartDto.id);
    return await this.cartRepository.save(createCartDto);
  }

  async findOne(id: string) {
    return await this.findExistingCart(id);
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    await this.findExistingCart(id);
    return await this.cartRepository.update(id, {
      ...updateCartDto,
      fechamodifi: new Date(),
    });
  }

  async remove(id: string) {
    await this.findExistingCart(id);
    await this.cartRepository.softDelete(id);
    return `Cart ${id} was deleted.`;
  }

  async emptyCart(id: string) {
    await this.findExistingCart(id);
    return await this.cartRepository.update(id, {
      productId: '',
    });
  }

  private async findExistingCart(id: string) {
    const cart = await this.cartRepository.findOne({
      where: [{ id }],
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return cart;
  }
}
