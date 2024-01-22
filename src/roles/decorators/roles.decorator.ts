import { SetMetadata } from '@nestjs/common';
import { Roles } from '../enums/role.enum';
import { ROLES_KEY } from '../../shared/common/constants/constants';

export const RoleDecorator = (role: Roles) => SetMetadata(ROLES_KEY, role);
