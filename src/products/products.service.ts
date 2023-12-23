import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.findOneBy({
      codigo: createProductDto.codigo,
    });

    if (product) {
      throw new BadRequestException('Product already exists');
    }
    return await this.productRepository.save({
      ...createProductDto,
      createdAt: new Date(),
    });
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(codigo: string) {
    const product = await this.productRepository.findOneBy({ codigo });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.productRepository.softDelete(id);
  }
}
