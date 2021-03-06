const developmentConfig = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'events-api',
    migrations: ['./src/database/migrations/*.ts'],
    entities: ['./src/models/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
];
module.exports = developmentConfig;
