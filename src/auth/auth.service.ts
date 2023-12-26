import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    await this.usersService.findOneByEmail(
      registerDto.email,
      registerDto.codigo,
    );

    await this.usersService.create({
      ...registerDto,
      password: await bcryptjs.hash(registerDto.password, 10),
      createdAt: new Date(),
      telefono: registerDto.phone,
    });

    return 'User created';
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findUserWithPassword(email);

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email or password is wrong');
    }

    const payload = { email: user.email, role: user.roleId };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }
}
