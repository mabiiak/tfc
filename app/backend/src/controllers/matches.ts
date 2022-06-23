import { Request, Response, NextFunction } from 'express';
import getAllMatches from '../services/matches';

async function controllerAllMatches(_req: Request, res: Response, next: NextFunction) {
  const allMatches = await getAllMatches();

  try {
    res.status(200).json(allMatches);
  } catch (error) {
    next(error);
  }
}

export default controllerAllMatches;
