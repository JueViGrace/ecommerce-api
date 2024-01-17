import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  codigo: string;

  @IsString()
  name: string;

  @IsNotEmpty()
  categoryImage: Express.Multer.File;
}
