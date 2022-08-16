import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password, driver_license }: IRequest) {
    const passwordHash = await hash(password, 10);
    const userExists = await this.usersRepository.findByEmail(email);
    if (userExists) throw new AppError('User already exists');
    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export default CreateUserUseCase;
