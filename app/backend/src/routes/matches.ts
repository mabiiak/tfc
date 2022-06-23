import { Router } from 'express';
import { controllerAllMatches, controllerCreateMatch } from '../controllers/matches';

const routeMatches = Router();

routeMatches.get('/', controllerAllMatches);
routeMatches.post('/', controllerCreateMatch);

export default routeMatches;
