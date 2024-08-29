import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query, BadRequestException, ParseIntPipe } from '@nestjs/common';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { prodcuto_servicio } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { pagination } from 'src/common/indix';
import { catchError, firstValueFrom } from 'rxjs';

@Controller('producto')
export class ProductoController {
  constructor(
    @Inject (prodcuto_servicio) private readonly producto :ClientProxy,

  ) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.producto.send('createProducto',createProductoDto);
  }

  @Get()
  findAll(@Query() pagination:pagination) {
    return this.producto.send('findAllProducto',{})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
  
  return this.producto.send('findOneProducto',{id})
  .pipe(
    catchError(err=> {throw new RpcException(err )})
  )
  
    /*  try{
   
      const producto=await firstValueFrom(

        this.producto.send('findOneProducto',{id})
      );
      return producto;

    }catch(error){
      throw new BadRequestException(error);
      

    }   */

}
  @Patch(':id')
 patchProdcuto(
  @Param('id', ParseIntPipe) id:number,
  @Body() UpdateProductoDto:UpdateProductoDto
 ){
  return this.producto.send('updateProducto',{
    id,
    ...UpdateProductoDto
  } ).pipe(
    catchError(err=>{throw new RpcException(err)})
  )}

  @Delete(':id')
  remove(@Param('id') id: string) {

    return this.producto.send('removeProducto',{id}).pipe
    (catchError(err=>{throw new RpcException(err)}))
  }
} 
