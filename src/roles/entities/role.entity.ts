import { Roles } from 'src/roles/enums/role.enum';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'web_role' })
export class RoleEntity {
  @OneToMany(() => UserEntity, (user) => user.role)
  user: UserEntity[];

  @Column({ length: 20, default: Roles.CLIENTE, primary: true })
  role: string;

  @UpdateDateColumn()
  fechamodifi: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
