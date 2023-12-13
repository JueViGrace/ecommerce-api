import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateVendedoresDto } from './dto/create-vendedore.dto';
import { UpdateVendedoresDto } from './dto/update-vendedores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendedor } from './entities/Vendedores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendedoresService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  async create(createVendedoreDto: CreateVendedoresDto) {
    const vendedor = await this.vendedorRepository.findOneBy({
      codigo: createVendedoreDto.codigo,
    });

    if (vendedor) {
      throw new BadRequestException('Vendor already exists');
    }

    return await this.vendedorRepository.save(createVendedoreDto);
  }

  async findAll() {
    const vendedores = this.vendedorRepository.find();

    if (!vendedores) {
      throw new NotFoundException('Vendors not found');
    }

    return vendedores;
  }

  async findOne(codigo: string) {
    const vendedor = await this.vendedorRepository.findOneBy({ codigo });

    if (!vendedor) {
      throw new NotFoundException('User not found');
    }

    return vendedor;
  }

  async update(id: string, updateVendedoreDto: UpdateVendedoresDto) {
    await this.findOne(id);

    return this.vendedorRepository.update(id, updateVendedoreDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.vendedorRepository.softDelete(id);
  }
}
