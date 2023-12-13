import { Module } from '@nestjs/common';
import { GerenciasService } from './gerencias.service';
import { GerenciasController } from './gerencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerencia } from './entities/gerencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gerencia])],
  controllers: [GerenciasController],
  providers: [GerenciasService],
})
export class GerenciasModule {}
