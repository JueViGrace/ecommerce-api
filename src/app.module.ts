import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { StatisticsModule } from './statistics/statistics.module';
import { OrdersModule } from './orders/orders.module';
import { DebtsModule } from './debts/debts.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DATABASE_SSL === 'true',
      extra: {
        ssl:
          process.env.DATABASE_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
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
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TrimMiddleware)
      .forRoutes({ method: RequestMethod.ALL, path: '/api/v1/' });
  } */
}
