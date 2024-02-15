import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderWithProducts } from './entities/orderWithProducts.entity';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(OrderWithProducts)
    private readonly orderWithProductsRepository: Repository<OrderWithProducts>,
    private readonly cartService: CartService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    await this.validateExistingOrder(createOrderDto.id);
    await this.cartService.findOne(createOrderDto.cart.id);

    for (const item in createOrderDto.cart.cartWithProducts) {
      const cartProducts = createOrderDto.cart.cartWithProducts[item];

      const order = await this.orderRepository.save({
        id: createOrderDto.id,
        user: createOrderDto.cart.user,
      });

      await this.orderWithProductsRepository.save({
        orderId: createOrderDto.id,
        productId: cartProducts.productId,
        quantity: cartProducts.quantity,
        product: cartProducts.product,
        order: order,
      });
    }

    const newOrder = await this.orderRepository.findOne({
      where: [{ id: createOrderDto.id }],
    });

    await this.cartService.emptyCartProducts(createOrderDto.cart.id);

    return `Order ${newOrder.id} created`;
  }

  async findAll(id: string) {
    const orders = await this.orderRepository.find({
      where: [{ user: { email: id } }, { user: { supervpor: id } }],
      relations: {
        orderWithProducts: true,
      },
    });

    if (orders.length === 0) {
      throw new NotFoundException('Orders not found');
    }

    return orders;
  }

  async findOne(id: string) {
    return await this.validateNotExistingOrder(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    await this.validateNotExistingOrder(id);

    return await this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: string) {
    await this.validateNotExistingOrder(id);
    await this.orderRepository.softDelete(id);
    return `Order ${id} was deleted`;
  }

  async validateNotExistingOrder(id: string) {
    const order = await this.orderRepository.findOne({
      where: [{ id: id }],
    });

    if (!order) {
      throw new NotFoundException(`Order ${id} doesn't exists`);
    }

    return order;
  }

  async validateExistingOrder(id: string) {
    const order = await this.orderRepository.findOne({
      where: [{ id: id }],
    });

    if (order) {
      throw new BadRequestException('Order already exists');
    }

    return order;
  }
}
