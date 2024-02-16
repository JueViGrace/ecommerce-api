import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';
import { ProductsModule } from '../products/products.module';
import { StatisticsModule } from '../statistics/statistics.module';
import { OrdersModule } from '../orders/orders.module';
import { DebtsModule } from '../debts/debts.module';
import { CategoriesModule } from '../categories/categories.module';
import { CartModule } from '../cart/cart.module';
import { AppController } from './app.controller';
import { TypeOrmService } from 'src/database/typeorm.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/shared/filters/exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    StatisticsModule,
    OrdersModule,
    DebtsModule,
    CategoriesModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
    TypeOrmService,
  ],
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TrimMiddleware)
      .forRoutes({ method: RequestMethod.ALL, path: '/api/v1/' });
  } */
}
