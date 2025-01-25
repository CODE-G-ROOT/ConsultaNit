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
  DATABASE_URL: string;
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
    DATABASE_URL: joi.string().trim().required(),
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
  DATABASE_URL,
} = data.value as Envs;
