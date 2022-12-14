import Teams from '../database/models/team';

export async function getAllTeams() {
  const allTeams = await Teams.findAll();
  return allTeams;
}

export async function getIdTeam(id: number) {
  const team = await Teams.findOne({ where: { id } });

  if (team === null) {
    return 'error';
  }
  return team;
}
