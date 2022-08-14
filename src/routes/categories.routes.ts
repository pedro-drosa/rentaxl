import { Router, Request, Response } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/usecases/createCategory/CreateCategoryController';
import importCategoryController from '../modules/cars/usecases/importCategory';
import ListCategoriesController from '../modules/cars/usecases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();
const upload = multer({ dest: 'tmp/' });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);

export default categoriesRoutes;
