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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: Boolean(process.env.DB_SYNCHRONIZE),
      logging: Boolean(process.env.DB_LOGGING),
      autoLoadEntities: true,
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
  controllers: [AppController],
  /* providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ], */
})
export class AppModule {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TrimMiddleware)
      .forRoutes({ method: RequestMethod.ALL, path: '/api/v1/' });
  } */
}
