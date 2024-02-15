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

@Entity({ name: 'role' })
export class RoleEntity {
  @OneToMany(() => UserEntity, (user) => user.role)
  user: UserEntity[];

  @Column({ default: Roles.CLIENTE, primary: true })
  role: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
