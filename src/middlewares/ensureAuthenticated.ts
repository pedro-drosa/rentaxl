import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import UsersRepository from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  if (!authorization) throw new AppError('Token not provided', 401);
  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer') throw new AppError('Badly formatted token', 401);
  verify(token, 'thisisasecretkey', async (error, decoded) => {
    if (error) throw new AppError('Token invalid', 401);
    const { sub: user_id } = decoded as IPayload;
    const usersRepository = new UsersRepository();
    const userExists = await usersRepository.findById(user_id);
    if (!userExists) throw new AppError('User not found', 401);
    next();
  });
}

export default ensureAuthenticated;
