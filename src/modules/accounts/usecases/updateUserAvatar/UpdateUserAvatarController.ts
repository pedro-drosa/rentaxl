import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarUseCase from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const user_avatar = request.file?.filename || '';
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    updateUserAvatarUseCase.execute({ user_id, user_avatar });
    return response.status(204).send();
  }
}

export default UpdateUserAvatarController;
