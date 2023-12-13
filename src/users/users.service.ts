import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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
    return this.userRepository.find();
  }

  async findOne(username: string) {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    return await this.userRepository.update(id, {
      ...updateUserDto,
      vendedor: updateUserDto.vendedor,
      ult_sinc: updateUserDto.ult_sinc,
      version: updateUserDto.version,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
