import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    await this.findExistingCategory(createCategoryDto.name);
    return this.categoryRepository.save({
      ...createCategoryDto,
      createdAt: new Date(),
      categoryImage: createCategoryDto.categoryImage.path,
    });
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: string) {
    return await this.findCategory(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findCategory(id);

    return await this.categoryRepository.update(id, {
      ...updateCategoryDto,
      fechamodifi: new Date(),
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
      where: [{ name: id }],
    });

    if (!category) {
      throw new BadRequestException(`Category ${id} doesn't exists`);
    }

    return category;
  }
}
