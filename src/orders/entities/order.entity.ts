import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'pedido' })
export class Order {
  @OneToOne(() => User, (user) => user.email)
  user: User;

  @Column({ primary: true, default: '' })
  id: string;

  @Column({ default: '' })
  fechamodifi: string;
}
