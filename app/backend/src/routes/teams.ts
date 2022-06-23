import { Router } from 'express';

const routerTeams = Router();

routerTeams.post('/');
routerTeams.get('/:id');

export default routerTeams;
