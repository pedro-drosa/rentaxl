import { Request, Response } from 'express';

import ImportCategoryUseCase from './ImportCategoryUseCase';

class ImportCategoryController {
  private importCategoryUseCase;

  constructor(importCategoryUseCase: ImportCategoryUseCase) {
    this.importCategoryUseCase = importCategoryUseCase;
  }

  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCategoryUseCase.excute(file);
    return response.send();
  }
}

export default ImportCategoryController;
