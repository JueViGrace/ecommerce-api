import { Column, DeleteDateColumn, Entity, Index } from 'typeorm';

@Entity()
export class User {
  @Column({ length: 30 })
  nombre: string;

  @Column({ length: 30, nullable: false, primary: true })
  username: string;

  @Column({ length: 20, select: false })
  password: string;

  @Column({ length: 8 })
  @Index('vendedor')
  vendedor: string;

  @Column({ length: 2, default: 0 })
  almacen: string;

  @Column({ default: 0 })
  desactivo: number;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: string;

  @Column({ default: 0 })
  ualterprec: number;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  sesionactiva: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  ult_sinc: string;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: 0 })
  sesion: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
