import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
  @Column()
  id: string;

  @Column()
  name: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
