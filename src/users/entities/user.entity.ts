import { Cart } from 'src/cart/entities/cart.entity';
import { Roles } from 'src/common/enums/role.enum';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @Column({ length: 30, default: '' })
  nombre: string;

  @Column({ length: 30, default: '' })
  codigo: string;

  @Column({ length: 30, primary: true })
  email: string;

  @Column({ select: false, default: '' })
  password: string;

  @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  desactivo: number;

  @Column({ length: 8, default: '' })
  supervpor: string;

  @Column({ length: 30, default: '' })
  telefono: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: Date;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: Date;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: false })
  sesion: boolean;

  @Column({ default: '' })
  almacen: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  createdAt: Date;

  @OneToMany(() => Role, (role) => role.role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'role' })
  role: Role;

  @Column({ default: Roles.CLIENTE })
  @Index('role')
  roleId: string;

  @OneToOne(() => Cart)
  cart: Cart;

  @DeleteDateColumn()
  deletedAt: Date;
}
