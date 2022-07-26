import { Router, Request, Response } from 'express';

import SpecificationsRepository from '../modules/cars/repositories/SpecificationsRepository';
import CreateSpecificationService from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  const specificationService = new CreateSpecificationService(
    specificationsRepository
  );
  specificationService.execute({ name, description });
  response.status(201).send();
});

export default specificationRoutes;
