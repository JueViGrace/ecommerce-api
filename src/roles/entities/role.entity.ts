import { Roles } from 'src/common/enums/role.enum';
import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Role {
  @Column({ default: Roles.CLIENTE, primary: true })
  role: string;

  @Column({ type: 'datetime', default: '0001-01-01 01:01:01' })
  fechamodifi: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
