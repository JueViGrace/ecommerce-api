import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/web/create-order.dto';
import { UpdateOrderDto } from './dto/web/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/web/order.entity';
import { Repository } from 'typeorm';
import { OrderWithProductsEntity } from './entities/web/orderWithProducts.entity';
import { CartService } from 'src/cart/cart.service';
import { CreatePedido } from 'src/shared/interfaces/pedidos/create-pedido.interface';
import { Pedido } from 'src/shared/interfaces/pedidos/pedido.interface';
import { LineasPedidoEntity } from './entities/shared/pedido-lineas.entity';
import { PedidoEntity } from './entities/shared/pedido.entity';
import { DocTypes } from 'src/shared/enums/doct-types.enum';
import { Roles } from 'src/roles/enums/role.enum';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(OrderWithProductsEntity)
    private readonly orderWithProductsRepository: Repository<OrderWithProductsEntity>,
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(LineasPedidoEntity)
    private readonly lineasPedidoRepository: Repository<LineasPedidoEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly cartService: CartService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    await this.validateExistingOrder(createOrderDto.id);
    const cart = await this.cartService.findOne(createOrderDto.cartId);

    const order = await this.orderRepository.save({
      id: createOrderDto.id,
      userId: cart.user.email,
    });

    for (const item in cart.cartWithProducts) {
      const cartProducts = cart.cartWithProducts[item];

      await this.orderWithProductsRepository.save({
        orderId: order.id,
        productId: cartProducts.productId,
        quantity: cartProducts.quantity,
      });
    }

    const newOrder = await this.orderRepository.findOne({
      where: [{ id: createOrderDto.id }],
    });

    if (newOrder.user.roleId === Roles.CLIENTE) {
      const vendedor = await this.userRepository.findOne({
        where: [{ codigo: newOrder.user.supervpor, roleId: Roles.VENDEDOR }],
      });
      if (!vendedor) {
        throw new NotFoundException(`Not vendor found`);
      }
      await this.pedidoRepository.save({
        ...newOrder,
        kti_ndoc: newOrder.id,
        kti_codcli: newOrder.user.codigo,
        kti_nombrecli: newOrder.user.nombre,
        kti_codven: vendedor.codigo,
        kti_docsol: DocTypes.FAC,
        kti_condicion: '2',
      });
    }

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
    await this.orderWithProductsRepository.softDelete({ orderId: id });
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

  // APP VEND-------------------------------------------------------------------

  async appCreate(createPedido: CreatePedido) {
    const pedidos = createPedido;

    const cabecera = await this.validateExistingCabecera(pedidos.Pedido);

    return {
      estado: cabecera,
    };
  }

  private async validateExistingCabecera(pedidos: Pedido[]) {
    const estado: {
      correlativo: string;
      status: number;
    }[] = [];

    for (const pedido in pedidos) {
      const cabecera = pedidos[pedido].Cabecera;

      const existeCabecera = await this.pedidoRepository.findOne({
        where: [{ kti_ndoc: cabecera.kti_ndoc }],
      });

      if (existeCabecera) {
        estado.push({
          correlativo: cabecera.kti_ndoc,
          status: 111,
        });
      } else {
        await this.pedidoRepository.insert(cabecera);
        estado.push({
          correlativo: cabecera.kti_ndoc,
          status: HttpStatus.OK,
        });

        const lineas = cabecera.Lineas;

        for (const lineaPedido in lineas) {
          const linea = lineas[lineaPedido];

          if (linea.kti_ndoc !== cabecera.kti_ndoc) {
            estado.push({
              correlativo: cabecera.kti_ndoc,
              status: 403,
            });
          } else {
            const existenLineas = await this.lineasPedidoRepository.findOne({
              where: [
                { kti_ndoc: linea.kti_ndoc, kmv_codart: linea.kmv_codart },
              ],
            });

            if (existenLineas) {
              estado.push({
                correlativo: linea.kti_ndoc,
                status: 112,
              });
            } else {
              await this.lineasPedidoRepository.insert(linea);
            }
          }
        }
      }
    }
    return estado;
  }
}
