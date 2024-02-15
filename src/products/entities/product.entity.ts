import { CartWithProducts } from 'src/cart/entities/cartWithProducts.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { OrderWithProducts } from 'src/orders/entities/orderWithProducts.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'articulo' })
export class ProductEntity {
  @Column({ length: 30, primary: true, default: '' })
  codigo: string;

  @Column({ type: 'double', precision: 24, scale: 0, default: 0 })
  comprometido: number;

  @Column({ type: 'double', precision: 4, scale: 2, default: 0 })
  dctotope: number;

  @Column({ type: 'double', precision: 4, scale: 0, default: 0 })
  discont: number;

  @Column({ type: 'char', length: 1, default: '' })
  enpreventa: string;

  @Column({ type: 'double', precision: 20, scale: 0, default: 0 })
  existencia: number;

  @Column({ length: 20, default: '' })
  marca: string;

  @Column({ length: 150, default: '' })
  nombre: string;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio1: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio2: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio3: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio4: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio5: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio6: number;

  @Column({ type: 'double', precision: 20, scale: 7, default: 0 })
  precio7: number;

  @Column({ length: 20, default: '', unique: true })
  referencia: string;

  @Column({ length: 6, default: '' })
  subgrupo: string;

  @Column({ length: 15, default: '' })
  unidad: string;

  @Column({ type: 'double', precision: 20, scale: 0, default: 0 })
  vta_max: number;

  @Column({ type: 'double', precision: 20, scale: 0, default: 0 })
  vta_min: number;

  @Column({ type: 'double', precision: 15, scale: 0, default: 0 })
  vta_minenx: number;

  @Column({ default: 0 })
  vta_solofac: number;

  @Column({ default: 0 })
  vta_solone: number;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @Column({ default: '' })
  productImage: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category', referencedColumnName: 'codigo' })
  category: CategoryEntity;

  // @ManyToMany(() => Order, (order) => order.products)
  // order: Order[];

  @OneToMany(
    () => CartWithProducts,
    (cartWithProducts) => cartWithProducts.product,
  )
  cartWithProducts: CartWithProducts[];

  @OneToMany(
    () => OrderWithProducts,
    (orderWithProducts) => orderWithProducts.product,
  )
  orderWithProducts: OrderWithProducts[];
}
