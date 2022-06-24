import { Router } from 'express';
import validateMatchTeams from '../middlewares/Matches';
import validateToken from '../middlewares/validateToken';
import {
  controllerAll,
  controllerCreate,
  controllerEdit,
  controllerEditFinish,
} from '../controllers/matches';

const routeMatches = Router();

routeMatches.get('/', controllerAll);
routeMatches.post('/', validateMatchTeams, validateToken, controllerCreate);
routeMatches.patch('/:id/', validateToken, controllerEdit);
routeMatches.patch('/:id/finish', validateToken, controllerEditFinish);

export default routeMatches;
