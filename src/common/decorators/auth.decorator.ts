import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { RoleDecorator } from './roles.decorator';
import { Roles } from '../enums/role.enum';

export function Auth(role: Roles) {
  return applyDecorators(RoleDecorator(role), UseGuards(AuthGuard, RolesGuard));
}
