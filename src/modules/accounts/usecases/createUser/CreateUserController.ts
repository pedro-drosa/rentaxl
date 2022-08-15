import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserUseCase from './CreateUserUseCase';

class CreaUserController {
  handle(request: Request, response: Response): Response {
    const { name, password, email, driver_license } = request.body;
    const createCategoryUseCase = container.resolve(CreateUserUseCase);
    createCategoryUseCase.execute({
      name,
      password,
      email,
      driver_license,
    });
    return response.status(201).send();
  }
}

export default CreaUserController;
