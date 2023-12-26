import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
  @Column({ length: 30, primary: true })
  name: string;

  @Column({ default: '' })
  categoryImage: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: Date;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
