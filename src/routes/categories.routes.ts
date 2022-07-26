import { Router, Request, Response } from 'express';

import createCategoryController from '../modules/cars/usecases/createCategory';
import listCategoriesController from '../modules/cars/usecases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export default categoriesRoutes;
