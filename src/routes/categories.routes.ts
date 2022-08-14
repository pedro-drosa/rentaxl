import { Router, Request, Response } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/usecases/createCategory/CreateCategoryController';
import importCategoryController from '../modules/cars/usecases/importCategory';
import listCategoriesController from '../modules/cars/usecases/listCategories';

const categoriesRoutes = Router();
const upload = multer({ dest: 'tmp/' });

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);

export default categoriesRoutes;
