import { Injectable } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistic } from './entities/statistic.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepository: Repository<Statistic>,
    private readonly userService: UsersService,
  ) {}

  async create(createStatisticDto: CreateStatisticDto) {
    await this.userService.findOne(createStatisticDto.user);

    return this.statisticRepository.save;
  }

  async findAll() {
    return `This action returns all statistics`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} statistic`;
  }

  async update(id: string, updateStatisticDto: UpdateStatisticDto) {
    return `This action updates a #${id} statistic`;
  }

  async remove(id: string) {
    return `This action removes a #${id} statistic`;
  }
}
