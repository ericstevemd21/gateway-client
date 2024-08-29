import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ExceptionFilter } from './common/exceptions/rpc-custom-exception.filter';

async function bootstrap() {

  const logger =new Logger('Maien gateway-client')
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe( {
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
app.useGlobalFilters(new ExceptionFilter())

  await app.listen(envs.port);

logger.log('conectado a la base ')


}
bootstrap();
