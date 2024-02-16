import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { OrderWithProductsEntity } from './orderWithProducts.entity';

@Entity({ name: 'web_orders' })
export class OrderEntity {
  @Column({ primary: true, default: '' })
  id: string;

  @Column({ length: 30, default: '' })
  userId: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @OneToMany(
    () => OrderWithProductsEntity,
    (orderWithProducts) => orderWithProducts.order,
    { eager: true },
  )
  @JoinTable()
  orderWithProducts: OrderWithProductsEntity[];

  @ManyToOne(() => UserEntity, (user) => user.orders, { eager: true })
  @JoinColumn({ name: 'userId', referencedColumnName: 'email' })
  user: UserEntity;
}
