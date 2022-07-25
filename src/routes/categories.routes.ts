import { Router, Request, Response } from 'express';

import Category from '../models/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  const category = new Category(name, description, new Date());
  categories.push(category);
  response.status(201).json(categories);
});

export default categoriesRoutes;
