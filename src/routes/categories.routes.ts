import { Router, Request, Response } from 'express';

import CategoriesRepository from '../modules/cars/repositories/CategoriesRepository';
import createCategoryController from '../modules/cars/usecases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  const repositories = await categoriesRepository.list();
  return response.json(repositories);
});

export default categoriesRoutes;
