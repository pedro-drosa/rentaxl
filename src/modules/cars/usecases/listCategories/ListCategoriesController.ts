import { Request, Response } from 'express';

import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  listCategoryUseCase: ListCategoriesUseCase;

  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoryUseCase = listCategoriesUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const repositories = await this.listCategoryUseCase.execute();
    return response.json(repositories);
  }
}

export default ListCategoriesController;
