import { Router } from 'express';
import { controllerAllTeams, controllerOneTeam } from '../controllers/teams';

const routerTeams = Router();

routerTeams.get('/', controllerAllTeams);
routerTeams.get('/:id', controllerOneTeam);

export default routerTeams;
