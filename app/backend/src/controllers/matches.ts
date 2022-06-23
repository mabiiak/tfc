import { Request, Response, NextFunction } from 'express';
import { getAllMatchesComplete, createMatches } from '../services/matches';

export async function controllerAllMatches(_req: Request, res: Response, next: NextFunction) {
  const allMatches = await getAllMatchesComplete();

  try {
    res.status(200).json(allMatches);
  } catch (error) {
    next(error);
  }
}

export async function controllerCreateMatch(req: Request, res: Response) {
  const itemCreated = await createMatches(req.body);

  res.status(201).json(itemCreated);
}

export default controllerAllMatches;
