import { Column, Entity } from 'typeorm';

@Entity({ name: 'ke_nivgcia' })
export class Gerencia {
  @Column({ length: 8 })
  kng_codgcia: string;

  @Column({ primary: true, length: 8 })
  kng_codcoord: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: string;
}
