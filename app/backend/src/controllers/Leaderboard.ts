import { Request, Response } from 'express';
import orderTable from '../services/leader';

export default async function controllerLeaderboard(_req: Request, res: Response) {
  const leader = await orderTable();

  res.status(200).json(leader);
}
