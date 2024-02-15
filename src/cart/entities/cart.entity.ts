import { UserEntity } from './../../users/entities/user.entity';
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
import { CartWithProducts } from './cartWithProducts.entity';

@Entity({ name: 'cart' })
export class CartEntity {
  @OneToOne(() => UserEntity, (user) => user.cart, { eager: true })
  @JoinColumn({ name: 'id', referencedColumnName: 'email' })
  user: UserEntity;

  @Column({ primary: true })
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  fechamodifi: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: 0 })
  status: number;

  @OneToMany(
    () => CartWithProducts,
    (cartWithProducts) => cartWithProducts.cart,
    { eager: true },
  )
  @JoinColumn({ name: 'productId', referencedColumnName: 'codigo' })
  cartWithProducts: CartWithProducts[];
}
