import { Router } from 'express';
import { controllerAll, controllerCreate, controllerEdit } from '../controllers/matches';
import validateMatchTeams from '../middlewares/Matches';

const routeMatches = Router();

routeMatches.get('/', controllerAll);
routeMatches.post('/', validateMatchTeams, controllerCreate);
routeMatches.patch('/:id/finish', controllerEdit);

export default routeMatches;
