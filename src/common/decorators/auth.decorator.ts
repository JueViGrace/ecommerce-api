import { UseGuards, applyDecorators } from '@nestjs/common';
import { Roles } from '../enums/role.enum';
import { RolesDecorator } from './roles.decorator';

export function Auth(roles: Roles) {
  return applyDecorators(RolesDecorator(roles), UseGuards());
}
