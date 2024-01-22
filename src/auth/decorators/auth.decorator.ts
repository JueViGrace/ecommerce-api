import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../../roles/guards/roles.guard';
import { RoleDecorator } from '../../roles/decorators/roles.decorator';
import { Roles } from '../../roles/enums/role.enum';

export function Auth(role: Roles) {
  return applyDecorators(RoleDecorator(role), UseGuards(AuthGuard, RolesGuard));
}
