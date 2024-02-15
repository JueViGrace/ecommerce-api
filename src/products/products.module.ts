import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './public/product',
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
    CategoriesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
