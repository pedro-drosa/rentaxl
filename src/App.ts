import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/routes';
import swaggerDocument from './swagger.json';
import './database';
import './shared/containers';
import errorHandler from './middlewares/errorHandler';

class App {
  server: Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.use(errorHandler);
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
