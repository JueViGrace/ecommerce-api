import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @Column({ length: 30 })
  nombre: string;

  @PrimaryColumn({ length: 30, nullable: false })
  username: string;

  @Column({ length: 20 })
  password: string;

  @Column({ length: 8 })
  @Index('vendedor')
  vendedor: string;

  @Column({ length: 2 })
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

  @Column({ length: 30 })
  version: string;

  @Column({ default: 0 })
  sesion: number;
}
