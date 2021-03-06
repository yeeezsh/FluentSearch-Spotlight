export enum ConfigEnvEnum {
  DATABASE_CONNECTION = 'DATABASE_CONNECTION',
  DATABASE_USERNAME = 'DATABASE_USERNAME',
  DATABASE_PASSWORD = 'DATABASE_PASSWORD',
  DATABASE_AUTH_SOURCE = 'DATABASE_AUTH_SOURCE',
  JWT_SECRET_KEY = 'JWT_SECRET_KEY',
  JWT_EXPIRES = 'JWT_EXPIRES',
  SESSION_SECRET = 'SESSION_SECRET',
  SESSION_EXPIRES = 'SESSION_EXPIRES',
  OPS_KEY = 'OPS_KEY',
  ORIGIN = 'ORIGIN',
  PORT = 'PORT',
  HOSTNAME = 'HOSTNAME',
  MAIN_HOSTNAME = 'MAIN_HOSTNAME',
  STORAGE_ENDPOINT = 'STORAGE_ENDPOINT',
}

export type ConfigEnvType = {
  [key in ConfigEnvEnum]: string;
};
