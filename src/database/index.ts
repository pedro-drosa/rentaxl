import 'reflect-metadata';
import { DataSource } from 'typeorm';

import Category from '../modules/cars/entities/Category';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'rentx',
  synchronize: true,
  logging: true,
  entities: [Category],
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(async () => {
    console.info('Initializing the database...');
  })
  .catch((err) => console.error(err));
