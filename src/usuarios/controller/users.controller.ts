import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('usuarios')
export class UsersController {
  constructor(private usuariosService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usuariosService.findUserById(id);
  }
}
