import { Router } from 'express';

import CreaUserController from '../modules/accounts/usecases/createUser/CreateUserController';

const usersRoutes = Router();
const createUserController = new CreaUserController();

usersRoutes.post('', createUserController.handle);

export default usersRoutes;
