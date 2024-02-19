import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/web/order.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { OrderWithProductsEntity } from './entities/web/orderWithProducts.entity';
import { CartModule } from 'src/cart/cart.module';
import { PedidoEntity } from './entities/shared/pedido.entity';
import { LineasPedidoEntity } from './entities/shared/pedido-lineas.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      OrderWithProductsEntity,
      PedidoEntity,
      LineasPedidoEntity,
      UserEntity,
    ]),
    AuthModule,
    RolesModule,
    CartModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
