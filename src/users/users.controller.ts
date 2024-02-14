import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Roles } from '../roles/enums/role.enum';

@Auth(Roles.CLIENTE || Roles.COORDINADOR || Roles.VENDEDOR || Roles.MASTER)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Auth(Roles.MASTER || Roles.COORDINADOR)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  // @Delete('remove/:id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(id);
  // }
}
