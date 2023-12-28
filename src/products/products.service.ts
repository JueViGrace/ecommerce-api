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
    const products = await this.productRepository.find();

    const trimedProducts = this.getProducts(products);

    return {
      products: trimedProducts,
    };
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

  private getProducts(value: any[]) {
    if (Array.isArray(value)) {
      value.forEach((element, index) => {
        value[index] = this.trim(element);
      });
      return value;
    }
    return value;
  }

  private trim(value: Product) {
    const product = {
      codigo: value.codigo.trim(),
      comprometido: value.comprometido,
      dctotope: value.dctotope,
      discont: value.discont,
      enpreventa: value.enpreventa.trim(),
      existencia: value.existencia,
      grupo: value.grupo.trim(),
      marca: value.marca.trim(),
      nombre: value.nombre.trim(),
      precio1: value.precio1,
      precio2: value.precio2,
      precio3: value.precio3,
      precio4: value.precio4,
      precio5: value.precio5,
      precio6: value.precio6,
      precio7: value.precio7,
      referencia: value.referencia.trim(),
      subgrupo: value.subgrupo.trim(),
      unidad: value.unidad.trim(),
      vta_max: value.vta_max,
      vta_min: value.vta_min,
      vta_minenx: value.vta_minenx,
      vta_solofac: value.vta_solofac,
      vta_solone: value.vta_solone,
      createdAt: value.createdAt,
      productImage: value.productImage.trim(),
    };
    return product;
  }
}
