import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'listvend' })
export class Vendedor {
  @Column({ primary: true, length: 8, default: '' })
  codigo: string;

  @Column({ length: 55, default: '' })
  nombre: string;

  @Column({ length: 100, default: '' })
  telefonos: string;

  @Column({ length: 100, default: '' })
  telefono_movil: string;

  @Column({ type: 'double', precision: 2, scale: 0, default: 1 })
  status: number;

  // @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  // superves: number;

  @Column({ length: 8, default: '' })
  supervpor: string;

  // @Column({ nullable: true, length: 6, default: '' })
  // sector: string;

  // @Column({ length: 6, default: '' })
  // subcodigo: string;

  @Column({ type: 'double', precision: 2, scale: 0, default: 0 })
  nivgcial: number;

  // @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  // fechamodifi: string;

  @Column({ length: 55, default: '' })
  email: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
