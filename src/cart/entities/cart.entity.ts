import { Product } from './../../products/entities/product.entity';
import { User } from './../../users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

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

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  createdAt: Date;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: Date;

  @Column({ default: 0 })
  status: number;
}
