import { CartEntity } from 'src/cart/entities/cart.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class UserEntity {
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

  @Column({ length: 30, default: '' })
  supervpor: string;

  @Column({ length: 30, default: '' })
  telefono: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: Date;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: false })
  sesion: boolean;

  @Column({ default: '' })
  almacen: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @ManyToOne(() => RoleEntity, (role) => role.role, { eager: true })
  @JoinColumn({ name: 'role', referencedColumnName: 'role' })
  role: RoleEntity;

  @OneToOne(() => CartEntity, (cart) => cart.user)
  cart: CartEntity;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}
