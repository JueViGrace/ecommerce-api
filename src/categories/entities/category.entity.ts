import { ProductEntity } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'web_categories' })
export class CategoryEntity {
  @Column({ length: 30, default: '', primary: true })
  codigo: string;

  @Column({ length: 30, default: '' })
  name: string;

  @Column({ default: '' })
  categoryImage: string;

  @UpdateDateColumn()
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
