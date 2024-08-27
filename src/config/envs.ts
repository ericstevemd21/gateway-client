import 'dotenv/config';
import * as joi from 'joi';

interface Envars {
    PORT :number;
    PRODCUTO_SERVICE_HOST:string,
    PRODCUTO_SERVICE_PORT: number
   }

const envsSchema=joi.object({
    PORT:joi.number().required(),
    PRODCUTO_SERVICE_HOST:joi.string().required(),
    PRODCUTO_SERVICE_PORT: joi.number().required(),
})
.unknown(true);
const {error, value }=envsSchema.validate(process.env);

if (error){
    throw new Error(`config validation error: ${error.message}`);

}

const envVars:Envars=value;


export const envs={
    port:envVars.PORT,
    PRODCUTO_SERVICE_HOST:envVars.PRODCUTO_SERVICE_HOST,
    PRODCUTO_SERVICE_PORT:envVars.PRODCUTO_SERVICE_PORT 
   
}