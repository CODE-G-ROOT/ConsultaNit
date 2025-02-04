import 'dotenv/config'; // Asegúrate de cargar el archivo .env al inicio
import * as joi from 'joi';

interface Envs {
  SERVER_PORT: number;
  SERVER_HOST: string;
  DB_NAME: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: string;
  CONSULTANIT_HOST: string;
  CONSULTANIT_PORT: number;
  CONSULTANIT_CMD: string;
}

const schema = joi
  .object({
    SERVER_PORT: joi.number().required(),
    SERVER_HOST: joi.string().trim().required(),
    DB_NAME: joi.string().required(),
    DB_USER: joi.string().trim().required(),
    DB_PASSWORD: joi.string().trim().required(),
    DB_HOST: joi.string().trim().required(),
    DB_PORT: joi.string().trim().required(),
    CONSULTANIT_HOST: joi.string().required(),
    CONSULTANIT_PORT: joi.number().required(),
    CONSULTANIT_CMD: joi.string().required(),
  })
  .unknown(true);

const data = schema.validate(process.env);

if (data.error) {
  throw new Error(`Config validation error: ${data.error.message}`);
}

export const {
  SERVER_PORT,
  SERVER_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  CONSULTANIT_HOST,
  CONSULTANIT_PORT,
  CONSULTANIT_CMD,
} = data.value as Envs;
