import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
  @Column({ length: 30, primary: true })
  name: string;

  @Column({ default: '' })
  categoryImage: string;

  @Column({ type: 'datetime', default: Date.now() })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
