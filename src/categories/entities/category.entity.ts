import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
  @Column({ default: '', primary: true })
  codigo: string;

  @Column({ length: 30, default: '' })
  name: string;

  @Column({ default: '' })
  categoryImage: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @OneToMany(() => Product, (product) => product.categories)
  products: Product[];
}
