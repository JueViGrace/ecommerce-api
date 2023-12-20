import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'estadistica' })
export class Statistic {
  @OneToOne(() => User, (user) => user.codigo)
  @JoinColumn({ name: 'usuario', referencedColumnName: 'codigo' })
  user: User;

  @Column({ primary: true })
  usuario: string;

  @Column({ primary: true, length: 8 })
  vendedor: string;

  @Column({ type: 'double', precision: 24, scale: 0 })
  clivisit: number;

  @Column({ type: 'double', precision: 24, scale: 0 })
  cntclientes: number;

  @Column({ type: 'double', precision: 24, scale: 0 })
  cntfacturas: number;

  @Column({ type: 'double', precision: 24, scale: 0 })
  cntpedidos: number;

  @Column({ type: 'double', precision: 24, scale: 0 })
  cntrecl: number;

  @Column({ length: 8 })
  codcoord: string;

  @Column({ type: 'double', precision: 24, scale: 7 })
  defdolTotneto: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  devdolTotneto: number;

  @Column({ type: 'date', default: '0001-01-01' })
  fechaEstad: string;

  @Column({ type: 'double', precision: 24, scale: 7 })
  lomMontovtas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  lomPrcvisit: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  lomPrcvtas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  metavend: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  mtofacturas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  mtopedidos: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  mtorecl: number;

  @Column({ length: 54 })
  nombrevend: string;

  @Column({ length: 54 })
  nomcoord: string;

  @Column({ type: 'double', precision: 24, scale: 7 })
  ppgdolTotneto: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  prcmeta: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  prcvisitas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  rlomMontovtas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  rlomPrcvisit: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  rlomPrcvtas: number;

  @Column({ type: 'double', precision: 24, scale: 7 })
  totdolcob: number;
}
