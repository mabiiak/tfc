import Matches from '../database/models/match';
import Teams from '../database/models/team';
import InewMatch from '../interfaces/INewMacth';
import { getIdTeam } from './teams';

export async function getAll() {
  const allMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return allMatches;
}

export async function create(newMatch: InewMatch) {
  const { homeTeam, awayTeam } = newMatch;
  const home = await getIdTeam(newMatch.homeTeam);
  const away = await getIdTeam(newMatch.awayTeam);

  if (homeTeam === awayTeam) {
    return 'error equal';
  }

  if (home === 'error' || away === 'error') {
    return 'error';
  }

  const createMatch = await Matches.create({
    homeTeam: newMatch.homeTeam,
    awayTeam: newMatch.awayTeam,
    homeTeamGoals: newMatch.homeTeamGoals,
    awayTeamGoals: newMatch.awayTeamGoals,
    inProgress: 1,
  });

  return createMatch;
}

export async function getBy(id: number) {
  const match = Matches.findOne({ where: { id } });
  return match;
}

export async function updateGoals(id: number, home: number, away: number) {
  const match = Matches.update({ homeTeamGoals: home, awayTeamGoals: away }, { where: { id } });
  return match;
}

export async function updateProgress(id: number) {
  const match = Matches.update({ inProgress: 0 }, { where: { id } });
  return match;
}
