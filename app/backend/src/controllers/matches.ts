import { Request, Response, NextFunction } from 'express';
import { getAll, create, updateGoals, updateProgress } from '../services/matches';

export async function controllerAll(_req: Request, res: Response, next: NextFunction) {
  const allMatches = await getAll();

  try {
    res.status(200).json(allMatches);
  } catch (error) {
    next(error);
  }
}

export async function controllerCreate(req: Request, res: Response) {
  const itemCreated = await create(req.body);

  if (itemCreated === 'error') {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  res.status(201).json(itemCreated);
}

export async function controllerEdit(req: Request, res: Response) {
  const { homeTeamGoals: home, awayTeamGoals: away } = req.body;
  const { id } = req.params;

  await updateGoals(Number(id), Number(home), Number(away));
  res.status(200).json({ message: 'Update goals!' });
}

export async function controllerEditFinish(req: Request, res: Response) {
  const { id } = req.params;

  await updateProgress(Number(id));
  res.status(200).json({ message: 'Finished' });
}
