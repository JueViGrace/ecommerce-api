import { Product } from './../../products/entities/product.entity';
import { User } from './../../users/entities/user.entity';
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

@Entity()
export class Cart {
  @OneToOne(() => User, (user) => user.email)
  @JoinColumn({ name: 'id', referencedColumnName: 'email' })
  user: User;

  @Column({ primary: true })
  id: string;

  @OneToMany(() => Product, (product) => product.codigo)
  @JoinColumn({ name: 'productId', referencedColumnName: 'codigo' })
  products: Product[];

  @Column({ default: '' })
  productId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  fechamodifi: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: 0 })
  status: number;
}
