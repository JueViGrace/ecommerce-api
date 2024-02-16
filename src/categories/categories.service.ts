import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    await this.findExistingCategory(createCategoryDto.name);

    await this.categoryRepository.save({
      ...createCategoryDto,
      categoryImage: createCategoryDto.categoryImage.path,
    });

    return `Category ${createCategoryDto.name} created`;
  }

  async findAll() {
    const categories = await this.categoryRepository.find();

    const res = this.getCategories(categories);

    return {
      categories: res,
    };
  }

  async findOne(id: string) {
    return await this.findCategory(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findCategory(id);

    return await this.categoryRepository.update(id, {
      ...updateCategoryDto,
      categoryImage: updateCategoryDto.categoryImage.path ?? '',
    });
  }

  async remove(id: string) {
    const category = await this.findCategory(id);

    await this.categoryRepository.softDelete(category);

    return `Category ${id} was deleted.`;
  }

  async findExistingCategory(id: string) {
    const category = await this.categoryRepository.findOne({
      where: [{ name: id }],
    });

    if (category) {
      throw new BadRequestException(`Category ${id} already exists`);
    }

    return category;
  }

  async findCategory(id: string) {
    const category = await this.categoryRepository.findOne({
      where: [{ codigo: id }],
    });

    if (!category) {
      throw new BadRequestException(`Category ${id} doesn't exists`);
    }

    return category;
  }

  private getCategories(value: any[]) {
    if (Array.isArray(value)) {
      value.forEach((element, index) => {
        value[index] = this.resCategory(element);
      });
      return value;
    }
    return value;
  }

  private resCategory(value: CategoryEntity) {
    return {
      name: value.name,
      categoryImage: value.categoryImage,
    };
  }
}
