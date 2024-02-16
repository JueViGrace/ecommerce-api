import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';
import { CartWithProductsEntity } from './cartWithProducts.entity';

@Entity({ name: 'web_cart' })
export class CartEntity {
  @OneToOne(() => UserEntity, (user) => user.cart, { eager: true })
  @JoinColumn({ name: 'id', referencedColumnName: 'email' })
  user: UserEntity;

  @Column({ length: 30, primary: true })
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  fechamodifi: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @Column({ default: 0 })
  status: number;

  @OneToMany(
    () => CartWithProductsEntity,
    (cartWithProducts) => cartWithProducts.cart,
    { eager: true },
  )
  @JoinColumn({ name: 'productId', referencedColumnName: 'codigo' })
  cartWithProducts: CartWithProductsEntity[];
}
