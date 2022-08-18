import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import User from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  user_avatar: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({ user_id, user_avatar }: IRequest) {
    const user = await this.usersRepository.findById(user_id);
    if (user?.avatar) {
      await deleteFile(`./tmp/avatar/${user?.avatar}`);
    }
    if (user) user.avatar = user_avatar;
    this.usersRepository.create(user as User);
  }
}

export default UpdateUserAvatarUseCase;
