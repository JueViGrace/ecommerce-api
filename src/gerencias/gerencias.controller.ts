import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GerenciasService } from './gerencias.service';
import { CreateGerenciaDto } from './dto/create-gerencia.dto';
import { UpdateGerenciaDto } from './dto/update-gerencia.dto';

@Controller('gerencias')
export class GerenciasController {
  constructor(private readonly gerenciasService: GerenciasService) {}

  @Post()
  create(@Body() createGerenciaDto: CreateGerenciaDto) {
    return this.gerenciasService.create(createGerenciaDto);
  }

  @Get()
  findAll() {
    return this.gerenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenciasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGerenciaDto: UpdateGerenciaDto,
  ) {
    return this.gerenciasService.update(id, updateGerenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gerenciasService.remove(id);
  }
}
