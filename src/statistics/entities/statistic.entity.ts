import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'estadistica' })
export class Statistic {
  @OneToOne(() => User, (user) => user.codigo)
  @JoinColumn({ name: 'vendedor', referencedColumnName: 'codigo' })
  codigo: string;

  @Column({ primary: true })
  vendedor: string;

  @Column()
  clivisit: number;

  @Column()
  cntclientes: number;

  @Column()
  cntfacturas: number;

  @Column()
  cntpedidos: number;

  @Column()
  cntrecl: number;

  @Column()
  codcoord: string;

  @Column()
  defdolTotneto: number;

  @Column()
  devdolTotneto: number;

  @Column()
  fechaEstad: string;

  @Column()
  lomMontovtas: number;

  @Column()
  lomPrcvisit: number;

  @Column()
  lomPrcvtas: number;

  @Column()
  metavend: number;

  @Column()
  mtofacturas: number;

  @Column()
  mtopedidos: number;

  @Column()
  mtorecl: number;

  @Column()
  nombrevend: string;

  @Column()
  nomcoord: string;

  @Column()
  ppgdolTotneto: number;

  @Column()
  prcmeta: number;

  @Column()
  prcvisitas: number;

  @Column()
  rlomMontovtas: number;

  @Column()
  rlomPrcvisit: number;

  @Column()
  rlomPrcvtas: number;

  @Column()
  totdolcob: number;
}
