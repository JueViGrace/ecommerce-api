import { Roles } from 'src/common/enums/role.enum';
import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Role {
  @Column({ default: Roles.CLIENTE, primary: true })
  role: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
