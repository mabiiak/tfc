import { Router } from 'express';
import validateMatchTeams from '../middlewares/Matches';
import {
  controllerAll,
  controllerCreate,
  controllerEdit,
  controllerEditFinish,
} from '../controllers/matches';

const routeMatches = Router();

routeMatches.get('/', controllerAll);
routeMatches.post('/', validateMatchTeams, controllerCreate);
routeMatches.patch('/:id/', controllerEdit);
routeMatches.patch('/:id/finish', controllerEditFinish);

export default routeMatches;
