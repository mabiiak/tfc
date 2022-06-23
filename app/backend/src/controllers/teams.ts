import { Request, Response, NextFunction } from 'express';
import { getAllTeams, getIdTeam } from '../services/teams';

export async function controllerAllTeams(_req: Request, res:Response, next: NextFunction) {
  const allTeams = await getAllTeams();

  try {
    res.status(200).json(allTeams);
  } catch (error) {
    next(error);
  }
}

export async function controllerOneTeam(req: Request, res:Response, next: NextFunction) {
  const { id } = req.params;

  const team = await getIdTeam(Number(id));

  try {
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
}
