import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({ name: 'orderWithProducts' })
export class OrderWithProducts {
  @Column({ primary: true })
  orderId: string;

  @Column({ primary: true })
  productId: string;

  @Column({ default: 0 })
  quantity: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderWithProducts, {
    cascade: true,
  })
  @JoinColumn({ name: 'orderId', referencedColumnName: 'id' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.orderWithProducts)
  @JoinColumn({ name: 'productId', referencedColumnName: 'codigo' })
  product: ProductEntity;
}
