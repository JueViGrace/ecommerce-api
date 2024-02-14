import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  codigo: string;

  @IsString()
  name: string;

  categoryImage: Express.Multer.File;
}
