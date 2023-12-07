import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/typeorm/entities/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
  ) {}

  async findUserById(id: string) {
    const user = await this.userRepository.findOneBy({ vendedor: id });

    if (!user)
      throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);

    return user;
  }
}
