import Matches from '../database/models/match';
import Teams from '../database/models/team';
import InewMatch from '../interfaces/INewMacth';

export async function getAllMatchesComplete() {
  const allMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return allMatches;
}

export async function createMatches(newMatch: InewMatch) {
  const createMatch = await Matches.create({
    homeTeam: newMatch.homeTeam,
    awayTeam: newMatch.awayTeam,
    homeTeamGoals: newMatch.homeTeamGoals,
    awayTeamGoals: newMatch.awayTeamGoals,
    inProgress: 1,
  });

  return createMatch;
}
