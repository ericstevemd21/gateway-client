import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateProductoDto {


   @IsString() 
    nombre_pro:string
    @IsString()
    marca:string
    @IsPositive()
    @IsNumber()
    @Type(()=>Number) 
    stock:number 
    @IsPositive()
    @IsNumber()
    @Type(()=>Number) 
    precio:number 
    @IsString()
    descricion:string


}
