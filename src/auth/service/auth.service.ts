import { LoginDto } from './../dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from './bcrypt.service';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { UserDataInterface } from 'src/common/interfaces/user-data.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
  ) {}

  async register(registerDto: RegisterDto) {
    console.log(registerDto);

    await this.usersService.findOneByEmail(
      registerDto.email,
      registerDto.codigo,
    );

    const user = await this.usersService.create({
      ...registerDto,
      password: await this.bcryptService.passwordEncrypt(registerDto.password),
      createdAt: new Date(),
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, deletedAt, fechamodifi, role, ..._user } = user;

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
    const { password, deletedAt, fechamodifi, role, ..._user } = user;

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
