import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({
      vendedor: createUserDto.vendedor,
    });

    if (user) {
      throw new BadRequestException('User already exists');
    }

    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    const users = this.userRepository.find();

    if (!users) {
      throw new NotFoundException('Users not found');
    }

    return users;
  }

  async findOne(username: string) {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.userRepository.softDelete(id);
  }
}
