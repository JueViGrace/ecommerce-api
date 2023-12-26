import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  categoryImage: Express.Multer.File;
}
