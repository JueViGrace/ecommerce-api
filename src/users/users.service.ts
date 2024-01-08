import { CartService } from './../cart/cart.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInterface } from 'src/common/interfaces/create-user.interface';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserParams: CreateUserInterface) {
    return this.userRepository.save(createUserParams);
  }

  async findAll(user: UserActiveInterface) {
    const users = this.userRepository.find();

    if (!users) {
      throw new NotFoundException('Users not found');
    }

    return users;
  }

  findOneByEmail(_email: string, _codigo: string) {
    return this.findExistingUser(_email, _codigo);
  }

  async findOne(username: string) {
    return await this.findUser(username);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findUser(id);

    return await this.userRepository.update(id, {
      ...updateUserDto,
      fechamodifi: new Date(),
    });
  }

  async remove(id: string) {
    await this.findUser(id);
    await this.userRepository.softDelete(id);
    return `User ${id} was deleted.`;
  }

  private async findExistingUser(_email: string, _codigo: string) {
    const user = await this.userRepository.findOne({
      where: [{ email: _email }, { codigo: _codigo }],
    });

    if (user) {
      throw new BadRequestException('User already exists');
    }

    return user;
  }

  private async findUser(value: string) {
    const user = await this.userRepository.findOne({
      where: [{ email: value }, { codigo: value }],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findUserWithPassword(value: string) {
    const user = await this.userRepository.findOne({
      where: [{ email: value }, { codigo: value }],
      select: [
        'nombre',
        'email',
        'codigo',
        'telefono',
        'createdAt',
        'desactivo',
        'supervpor',
        'ult_sinc',
        'version',
        'sesion',
        'almacen',
        'roleId',
        'password',
      ],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
