import { CartWithProductsEntity } from 'src/cart/entities/cartWithProducts.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
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

@Entity({ name: 'web_product' })
export class ProductEntity {
  @Column({ length: 30, primary: true, default: '' })
  codigo: string;

  @Column({ type: 'decimal', precision: 24, scale: 0, default: 0 })
  comprometido: number;

  @Column({ type: 'decimal', precision: 4, scale: 2, default: 0 })
  dctotope: number;

  @Column({ type: 'decimal', precision: 4, scale: 0, default: 0 })
  discont: number;

  @Column({ type: 'char', length: 1, default: '' })
  enpreventa: string;

  @Column({ type: 'decimal', precision: 20, scale: 0, default: 0 })
  existencia: number;

  @Column({ length: 20, default: '' })
  marca: string;

  @Column({ length: 150, default: '' })
  nombre: string;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio1: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio2: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio3: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio4: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio5: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio6: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio7: number;

  @Column({ length: 20, default: '', unique: true })
  referencia: string;

  @Column({ length: 6, default: '' })
  subgrupo: string;

  @Column({ length: 15, default: '' })
  unidad: string;

  @Column({ type: 'decimal', precision: 20, scale: 0, default: 0 })
  vta_max: number;

  @Column({ type: 'decimal', precision: 20, scale: 0, default: 0 })
  vta_min: number;

  @Column({ type: 'decimal', precision: 15, scale: 0, default: 0 })
  vta_minenx: number;

  @Column({ default: 0 })
  vta_solofac: number;

  @Column({ default: 0 })
  vta_solone: number;

  @UpdateDateColumn()
  fechamodifi: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: '' })
  productImage: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category', referencedColumnName: 'codigo' })
  category: CategoryEntity;

  @OneToMany(
    () => CartWithProductsEntity,
    (cartWithProducts) => cartWithProducts.product,
  )
  cartWithProducts: CartWithProductsEntity[];
}
