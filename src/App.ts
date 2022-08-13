import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/routes';
import swaggerDocument from './swagger.json';

import './database';

class App {
  server: Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
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
