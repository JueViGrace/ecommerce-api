import { Roles } from 'src/common/enums/role.enum';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @Column({ length: 30, default: '' })
  nombre: string;

  @Column({ length: 30, unique: true, default: '' })
  @Index('codigo')
  codigo: string;

  @Column({ length: 30, nullable: false, primary: true })
  email: string;

  @Column({ select: false, default: '' })
  password: string;

  @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  desactivo: number;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: string;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: 0 })
  sesion: number;

  @OneToOne(() => Role, (role) => role.role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'role' })
  role: Role;

  @Column({ default: Roles.CLIENTE })
  roleId: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
