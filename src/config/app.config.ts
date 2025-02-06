export const appConfig = () => ({
  environment: {
    nodeEnv: process.env.NODE_ENV || 'production',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    syncronize: process.env.DB_SYNC === 'true' ? true : false,
    autoLoadEntities:
      process.env.DB_AUTO_LOAD_ENTITIES === 'true' ? true : false,
  },
});
