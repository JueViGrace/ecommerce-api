import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartWithProductsEntity } from './entities/cartWithProducts.entity';
import { ProductsService } from 'src/products/products.service';
import { CategoriesService } from 'src/categories/categories.service';
import { ProductEntity } from 'src/products/entities/product.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CartEntity,
      CartWithProductsEntity,
      ProductEntity,
      CategoryEntity,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService, ProductsService, CategoriesService],
  exports: [CartService],
})
export class CartModule {}
