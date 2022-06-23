import { Router } from 'express';
import { controllerAll, controllerCreate, controllerEdit } from '../controllers/matches';

const routeMatches = Router();

routeMatches.get('/', controllerAll);
routeMatches.post('/', controllerCreate);
routeMatches.patch('/:id/finish', controllerEdit);

export default routeMatches;
