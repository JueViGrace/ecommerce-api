import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'web_order_with_products' })
export class OrderWithProductsEntity {
  @Column({ length: 30, primary: true })
  orderId: string;

  @Column({ length: 30, primary: true })
  productId: string;

  @Column({ default: 0 })
  quantity: number;

  @UpdateDateColumn()
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @ManyToOne(() => OrderEntity, (order) => order.orderWithProducts)
  @JoinColumn({ name: 'orderId', referencedColumnName: 'id' })
  order: OrderEntity;
}
