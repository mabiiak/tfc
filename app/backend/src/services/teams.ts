import Teams from '../database/models/team';

export async function getAllTeams() {
  const allTeams = Teams.findAll();
  return allTeams;
}

export async function getIdTeams(id: number) {
  const team = Teams.findOne({ where: { id } });
  return team;
}
