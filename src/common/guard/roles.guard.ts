import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { Roles } from '../enums/role.enum';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../constants/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly rolesService: RolesService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.getAllAndOverride<Roles>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!role) {
      return true;
    }

    const master = await this.rolesService.findOne(Roles.MASTER);

    const { user } = context.switchToHttp().getRequest();

    if (user.role === '') {
      throw new BadRequestException('User role is empty');
    }

    if (user.role === master.role) {
      return true;
    }

    return role === user.role;
  }
}
