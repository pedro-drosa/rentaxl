import { Router, Request, Response } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  categories.push({ name, description });
  response.status(201).send();
});

export default categoriesRoutes;
