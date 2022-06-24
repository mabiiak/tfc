import { Request, Response, NextFunction } from 'express';
import { getIdTeam } from '../services/teams';

async function validateMatchTeams(req: Request, res: Response, next: NextFunction) {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  next();
}

export async function checkExistTeams(req: Request, res: Response, next: NextFunction) {
  const { homeTeam, awayTeam } = req.body;

  const home = await getIdTeam(homeTeam);
  const away = await getIdTeam(awayTeam);

  if (home === null || away === null) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
}

export default validateMatchTeams;
