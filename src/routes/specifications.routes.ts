import { Router, Request, Response } from 'express';

import createSpecificationController from '../modules/cars/usecases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

export default specificationRoutes;
