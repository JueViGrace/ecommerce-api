import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'articulo' })
export class Product {
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

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ length: 20, default: '' })
  grupo: string;

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

  @Column({ length: 20, default: '' })
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

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  createdAt: Date;

  @OneToMany(() => Category, (category) => category.name)
  @JoinColumn({ name: 'grupo', referencedColumnName: 'name' })
  category: Category;

  @Column({ default: '' })
  productImage: string;
}
