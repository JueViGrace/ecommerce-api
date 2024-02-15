import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './public/category',
          filename: (req, file, callback) => {
            callback(
              null,
              `${file.originalname.split('.')[0]}-${Date.now()}.${
                file.mimetype.split('/')[1]
              }`,
            );
          },
        }),
      }),
    }),
    AuthModule,
    RolesModule,
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
