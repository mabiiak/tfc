import { Request, Response, NextFunction } from 'express';
import { getAll, create, getBy, update } from '../services/matches';

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

  res.status(201).json(itemCreated);
}

export async function controllerEdit(req: Request, res: Response) {
  const { id } = req.params;

  await update(Number(id));
  res.status(200).json({ message: 'Finished' });
}
