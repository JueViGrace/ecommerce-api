import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInterface } from 'src/shared/interfaces/user/create-user.interface';
import { Roles } from 'src/roles/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserParams: CreateUserInterface) {
    return this.userRepository.save({
      ...createUserParams,
      roleId: Roles.CLIENTE,
    });
  }

  async findAll() {
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
    return await this.validateNotExistingUser(username);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.validateNotExistingUser(id);

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    await this.validateNotExistingUser(id);
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

  private async validateNotExistingUser(value: string) {
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
        'password',
        'roleId',
      ],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
