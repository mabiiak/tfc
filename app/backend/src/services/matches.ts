import Matches from '../database/models/match';
import Teams from '../database/models/team';

export default async function getAlllMatches() {
  const allMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return allMatches;
}
