import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateSpecificationController from '../modules/cars/usecases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post('/', createSpecificationController.handle);

export default specificationRoutes;
