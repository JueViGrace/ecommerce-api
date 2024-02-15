import { ProductEntity } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categorias' })
export class CategoryEntity {
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

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
