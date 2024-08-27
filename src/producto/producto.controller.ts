import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { prodcuto_servicio } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('producto')
export class ProductoController {
  constructor(
    @Inject (prodcuto_servicio) private readonly producto :ClientProxy,

  ) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return 'ingresar producto ';
  }

  @Get()
  findAll() {
    return this.producto.send('findAllProducto',{})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'buscar un producto '
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return 'actualizar un producto '
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return ' eliminar un prodcuto '
  }
}
