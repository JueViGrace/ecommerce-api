import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UsePipes,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Roles } from 'src/common/enums/role.enum';
import { CategoryPipe } from './pipes/category.pipe';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  @Auth(Roles.MASTER)
  @UseInterceptors(FileInterceptor('categoryImage'))
  @UsePipes(CategoryPipe)
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoriesService.create({
      ...createCategoryDto,
      categoryImage: file,
    });
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @Auth(Roles.MASTER)
  @UseInterceptors(FileInterceptor('categoryImage'))
  @UsePipes(CategoryPipe)
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, {
      ...updateCategoryDto,
      categoryImage: file,
    });
  }

  @Delete(':id')
  @Auth(Roles.MASTER)
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
