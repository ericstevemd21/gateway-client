import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, prodcuto_servicio } from 'src/config';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
  imports: [
    ClientsModule.register([
      { name: prodcuto_servicio,
         transport: Transport.TCP,
        options:{
          host:envs.PRODCUTO_SERVICE_HOST,
          port:envs.PRODCUTO_SERVICE_PORT,

                }
        },
    ]),
  ]
})
export class ProductoModule {


  
}
