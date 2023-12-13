import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { CreateVendedoresDto } from './dto/create-vendedore.dto';
import { UpdateVendedoresDto } from './dto/update-vendedores.dto';

@Controller('vendedores')
export class VendedoresController {
  constructor(private readonly vendedoresService: VendedoresService) {}

  @Post('create')
  create(@Body() createVendedoreDto: CreateVendedoresDto) {
    return this.vendedoresService.create(createVendedoreDto);
  }

  @Get()
  findAll() {
    return this.vendedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedoresService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendedoreDto: UpdateVendedoresDto,
  ) {
    return this.vendedoresService.update(id, updateVendedoreDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.vendedoresService.remove(id);
  }
}
