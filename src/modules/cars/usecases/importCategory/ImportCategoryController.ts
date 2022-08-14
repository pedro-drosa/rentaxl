import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportCategoryUseCase from './ImportCategoryUseCase';

class ImportCategoryController {
  handle(request: Request, response: Response) {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    importCategoryUseCase.excute(file);
    return response.status(201).send();
  }
}

export default ImportCategoryController;
