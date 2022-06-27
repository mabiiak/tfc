import { Router } from 'express';
import {
  controllerLeaderboard,
  controllerLeaderboardAway,
} from '../controllers/Leaderboard';

const routeLeaderboard = Router();

routeLeaderboard.get('/home/', controllerLeaderboard);
routeLeaderboard.get('/away/', controllerLeaderboardAway);

export default routeLeaderboard;
