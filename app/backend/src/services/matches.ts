import Matches from '../database/models/match';

export default async function getAlllMatches() {
  const allMatches = await Matches.findAll();
  return allMatches;
}
