import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from '../common/decorators/auth.decorator';
import { Roles } from '../common/enums/role.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Auth(Roles.CLIENTE || Roles.COORDINADOR || Roles.VENDEDOR || Roles.MASTER)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Auth(Roles.MASTER)
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.usersService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
