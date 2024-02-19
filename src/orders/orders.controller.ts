import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/web/create-order.dto';
import { UpdateOrderDto } from './dto/web/update-order.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'src/roles/enums/role.enum';
import { CreatePedidoDto } from './dto/shared/create-pedido.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Auth(Roles.CLIENTE || Roles.VENDEDOR || Roles.MASTER)
  @Post('create')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post('av/create')
  appCreate(@Body() createPedidoDto: CreatePedidoDto) {
    return this.ordersService.appCreate(createPedidoDto);
  }

  @Auth(Roles.CLIENTE)
  @Get('findBy/filter?')
  findAll(@Query('id') id: string) {
    return this.ordersService.findAll(id);
  }

  @Auth(Roles.CLIENTE)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Auth(Roles.MASTER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Auth(Roles.MASTER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
