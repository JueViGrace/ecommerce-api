import { Injectable } from '@nestjs/common';
import { CreateGerenciaDto } from './dto/create-gerencia.dto';
import { UpdateGerenciaDto } from './dto/update-gerencia.dto';

@Injectable()
export class GerenciasService {
  create(createGerenciaDto: CreateGerenciaDto) {
    return 'This action adds a new gerencia';
  }

  findAll() {
    return `This action returns all gerencias`;
  }

  findOne(id: string) {
    return `This action returns a #${id} gerencia`;
  }

  update(id: string, updateGerenciaDto: UpdateGerenciaDto) {
    return `This action updates a #${id} gerencia`;
  }

  remove(id: string) {
    return `This action removes a #${id} gerencia`;
  }
}
