import { Router } from 'express';
import controllerAllMatches from '../controllers/matches';

const routeMatches = Router();

routeMatches.get('/', controllerAllMatches);

export default routeMatches;
