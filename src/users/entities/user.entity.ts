import { Cart } from 'src/cart/entities/cart.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @Column({ length: 30, default: '' })
  nombre: string;

  @Column({ length: 30, default: '', unique: true })
  @Index('codigo')
  codigo: string;

  @Column({ length: 30, primary: true })
  email: string;

  @Column({ select: false, default: '' })
  password: string;

  @Column({ default: 0 })
  desactivo: number;

  @Column({ length: 8, default: '' })
  supervpor: string;

  @Column({ length: 30, default: '' })
  telefono: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: Date;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: false })
  sesion: boolean;

  @Column({ default: '' })
  almacen: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Role, (role) => role.role, { eager: true })
  @JoinColumn({ name: 'role', referencedColumnName: 'role' })
  role: Role;

  @OneToOne(() => Cart, (cart) => cart.id)
  cart: Cart;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
