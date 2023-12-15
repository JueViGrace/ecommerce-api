import { SetMetadata } from '@nestjs/common';
import { Roles } from '../enums/role.enum';
import { ROLES_KEY } from '../constants/constants';

export const RolesDecorator = (roles: Roles) => SetMetadata(ROLES_KEY, roles);
