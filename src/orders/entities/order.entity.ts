import { User } from 'src/users/entities/user.entity';
import { Entity, OneToOne } from 'typeorm';

@Entity({ name: 'pedido' })
export class Order {
  @OneToOne(() => User, (user) => user.codigo)
  codigo: string;

  fechamodifi: string;
  kePedstatus: string;
  ktiCodcli: string;
  ktiCodven: string;
  ktiCondicion: string;
  ktiDocsol: string;
  ktiFchdoc: string;
  ktiNdoc: string;
  ktiNegesp: string;
  ktiNombrecli: string;
  ktiNroped: string;
  ktiStatus: string;
  ktiTdoc: string;
  ktiTipprec: number;
  ktiTotneto: number;
}
