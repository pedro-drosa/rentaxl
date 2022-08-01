import { Router, Request, Response } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/usecases/createCategory';
import listCategoriesController from '../modules/cars/usecases/listCategories';

const categoriesRoutes = Router();
const upload = multer({ dest: 'tmp/' });

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    const { file } = request;
    console.log(file);
    response.json({ message: true });
  }
);

export default categoriesRoutes;
