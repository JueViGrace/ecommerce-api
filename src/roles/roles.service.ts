import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.findOneBy({
      role: createRoleDto.role,
    });

    if (role) {
      throw new BadRequestException('Role already exists');
    }

    return await this.roleRepository.save(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(role: string) {
    const roles = await this.roleRepository.findOneBy({ role });

    if (!roles) {
      throw new BadRequestException('Role not found');
    }

    return roles;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    await this.findOne(id);
    return this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.roleRepository.softDelete(id);
  }
}
