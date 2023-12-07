import { Module } from '@nestjs/common';
import { UsuariosController } from './controller/usuarios/usuarios.controller';

@Module({
  controllers: [UsuariosController]
})
export class UsuariosModule {}
