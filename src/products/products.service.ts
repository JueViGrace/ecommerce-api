import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    await this.validateExistingProduct(
      createProductDto.codigo,
      createProductDto.grupo,
    );
    return await this.productRepository.save({
      ...createProductDto,
      createdAt: new Date(),
    });
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(codigo: string) {
    return this.validateNotExistingProduct(codigo);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    return await this.productRepository.update(id, {
      ...updateProductDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.productRepository.softDelete(id);
  }

  async validateExistingProduct(id: string, category: string) {
    await this.categoriesService.findCategory(category);
    const product = await this.productRepository.findOne({
      where: [{ codigo: id }],
    });

    if (product) {
      throw new BadRequestException(`Product ${id} already exists`);
    }

    return product;
  }

  async validateNotExistingProduct(id: string) {
    const product = await this.productRepository.findOne({
      where: [{ codigo: id }],
    });

    if (!product) {
      throw new BadRequestException(`Product ${id} doesn't exists`);
    }

    return product;
  }
}
