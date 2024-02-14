import { Roles } from 'src/roles/enums/role.enum';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Role {
  @OneToMany(() => User, (user) => user.role)
  user: User[];

  @Column({ default: Roles.CLIENTE, primary: true })
  role: string;

  @UpdateDateColumn({ select: false })
  fechamodifi: Date;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
