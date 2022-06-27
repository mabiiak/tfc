import { Request, Response } from 'express';
import orderTable from '../services/leaderHome';
import orderTableAway from '../services/leaderAway';

export async function controllerLeaderboard(_req: Request, res: Response) {
  const leader = await orderTable();

  res.status(200).json(leader);
}

export async function controllerLeaderboardAway(_req: Request, res: Response) {
  const leader = await orderTableAway();

  res.status(200).json(leader);
}
