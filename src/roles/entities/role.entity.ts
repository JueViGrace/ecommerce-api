import { Roles } from 'src/roles/enums/role.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Role {
  @Column({ default: Roles.CLIENTE, primary: true })
  role: string;

  @UpdateDateColumn()
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
