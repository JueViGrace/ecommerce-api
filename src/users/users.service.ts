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

  findOneByEmail(email: string) {
    return this.validateExistingUser(email);
  }

  async findOne(username: string) {
    return await this.findUser(username);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findUser(id);

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    await this.findUser(id);
    return await this.userRepository.softDelete(id);
  }

  private async validateExistingUser(value: string) {
    const user = await this.userRepository.findOne({
      where: [{ email: value }, { codigo: value }],
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
      select: ['email', 'password', 'roleId'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
