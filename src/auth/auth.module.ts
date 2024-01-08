import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BcryptService } from './service/bcrypt.service';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
        global: true,
      }),
      inject: [ConfigService],
    }),
    CartModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, BcryptService],
  exports: [JwtModule],
})
export class AuthModule {}
