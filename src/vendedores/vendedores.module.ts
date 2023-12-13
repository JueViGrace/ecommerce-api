import { Module } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { VendedoresController } from './vendedores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendedor } from './entities/Vendedores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])],
  controllers: [VendedoresController],
  providers: [VendedoresService],
})
export class VendedoresModule {}
