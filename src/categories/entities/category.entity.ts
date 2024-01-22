import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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

  @UpdateDateColumn()
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
