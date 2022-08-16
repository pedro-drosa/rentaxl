import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

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
  if (!authorization) throw new Error('Token not provided');
  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer') throw new Error('Badly formatted token');
  verify(token, 'thisisasecretkey', async (error, decoded) => {
    if (error) throw new Error('Token invalid');
    const { sub: user_id } = decoded as IPayload;
    const usersRepository = new UsersRepository();
    const userExists = await usersRepository.findById(user_id);
    if (!userExists) throw new Error('User not found');
    next();
  });
}

export default ensureAuthenticated;
