import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
    const repositories = await listCategoryUseCase.execute();
    return response.json(repositories);
  }
}

export default ListCategoriesController;
