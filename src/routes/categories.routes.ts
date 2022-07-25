import { Router, Request, Response } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  categoriesRepository.create({ name, description });
  response.status(201).send();
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const repositories = categoriesRepository.list();
  return response.json(repositories);
});

export default categoriesRoutes;
