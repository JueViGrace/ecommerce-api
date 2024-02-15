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
import { OrderWithProducts } from './orderWithProducts.entity';

@Entity({ name: 'pedido' })
export class OrderEntity {
  @Column({ primary: true, default: '' })
  id: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @OneToMany(
    () => OrderWithProducts,
    (orderWithProducts) => orderWithProducts.order,
  )
  @JoinTable()
  orderWithProducts: OrderWithProducts[];

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'user', referencedColumnName: 'email' })
  user: UserEntity;
}
