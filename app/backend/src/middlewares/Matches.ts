import { Request, Response, NextFunction } from 'express';
// import { getAllTeams } from '../services/teams';

async function validateMatchTeams(req: Request, res: Response, next: NextFunction) {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    res.status(401).json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
}

export default validateMatchTeams;
