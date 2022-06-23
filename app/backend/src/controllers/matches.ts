import { Request, Response, NextFunction } from 'express';
import { getAll, create, update } from '../services/matches';
// import { getIdTeam } from '../services/teams';

export async function controllerAll(_req: Request, res: Response, next: NextFunction) {
  const allMatches = await getAll();

  try {
    res.status(200).json(allMatches);
  } catch (error) {
    next(error);
  }
}

export async function controllerCreate(req: Request, res: Response) {
  // const { homeTeam, awayTeam } = req.body;
  // const home = await getIdTeam(homeTeam);
  // const away = await getIdTeam(awayTeam);

  // if (home === null || away === null) {
  //   res.status(401).json({ message: 'There is no team with such id!' });
  // }

  const itemCreated = await create(req.body);

  res.status(201).json(itemCreated);
}

export async function controllerEdit(req: Request, res: Response) {
  const { id } = req.params;

  await update(Number(id));
  res.status(200).json({ message: 'Finished' });
}
