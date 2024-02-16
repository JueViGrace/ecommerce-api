import { LoginDto } from './../dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from './bcrypt.service';
import { UserActiveInterface } from 'src/shared/interfaces/user/user-active.interface';
import { UserDataInterface } from 'src/shared/interfaces/user/user-data.interface';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
    private readonly cartService: CartService,
  ) {}

  async register(registerDto: RegisterDto) {
    await this.usersService.findOneByEmail(
      registerDto.email,
      registerDto.codigo,
    );

    const user = await this.usersService.create({
      ...registerDto,
      password: await this.bcryptService.passwordEncrypt(registerDto.password),
      sesion: true,
    });

    await this.cartService.create({
      id: user.email,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, deletedAt, fechamodifi, ..._user } = user;

    return this.generateJWT(_user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findUserWithPassword(loginDto.email);

    const isPasswordValid = await bcryptjs.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email or password is wrong');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, role, ..._user } = user;

    return this.generateJWT(_user);
  }

  async generateJWT(user: UserDataInterface) {
    const payload: UserActiveInterface = {
      role: user.roleId,
      email: user.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      user,
    };
  }
}
