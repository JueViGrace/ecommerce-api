import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @Column({ length: 30, default: '' })
  nombre: string;

  @Column({ length: 30, nullable: false, primary: true, default: '' })
  username: string;

  @Column({ length: 20, select: false, default: '' })
  password: string;

  @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  desactivo: number;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: string;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: 0 })
  sesion: number;

  @DeleteDateColumn()
  deletedAt: Date;

  // @Column({ length: 8, default: '' })
  // @Index('vendedor')
  // vendedor: string;

  // @Column({ length: 2, default: 0 })
  // almacen: string;

  // @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  // fechamodifi: string;

  // @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  // ualterprec: number;

  // @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  // sesionactiva: string;
}
