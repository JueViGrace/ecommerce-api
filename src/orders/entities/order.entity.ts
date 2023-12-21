import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'pedido' })
export class Order {
  @OneToOne(() => User, (user) => user.codigo)
  codigo: string;

  @Column()
  fechamodifi: string;

  @Column()
  kePedstatus: string;

  @Column()
  ktiCodcli: string;

  @Column()
  ktiCodven: string;

  @Column()
  ktiCondicion: string;

  @Column()
  ktiDocsol: string;

  @Column()
  ktiFchdoc: string;

  @Column()
  ktiNdoc: string;

  @Column()
  ktiNegesp: string;

  @Column()
  ktiNombrecli: string;

  @Column()
  ktiNroped: string;

  @Column()
  ktiStatus: string;

  @Column()
  ktiTdoc: string;

  @Column()
  ktiTipprec: number;

  @Column()
  ktiTotneto: number;
}
