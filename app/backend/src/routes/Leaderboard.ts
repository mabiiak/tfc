import { Router } from 'express';
import controllerLeaderboard from '../controllers/Leaderboard';

const routeLeaderboard = Router();

routeLeaderboard.get('/home/', controllerLeaderboard);

export default routeLeaderboard;
