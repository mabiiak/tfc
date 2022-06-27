import Matches from '../database/models/match';
import { getAllTeams } from './teams';
import { IBorder } from '../interfaces/IBorder';
import { IMatch } from '../interfaces/INewMacth';

// Feito com a ajuda do Ivan

async function finishMatches() {
  const homeMatches = await Matches.findAll({
    where: { inProgress: false },
    attributes: { exclude: ['inProgress', 'id'] },
  });

  return homeMatches;
}

const createteamRow = (name: string) => ({
  name,
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
});

const calculateEfficiency = (points: number, totalGames: number) => {
  const calc = ((points / (totalGames * 3)) * 100);
  return Number(calc.toFixed(2));
};

const incrementTable = (row: IBorder, info: IMatch) => {
  const teamRow = row;
  teamRow.totalGames += 1;
  teamRow.goalsFavor += info.homeTeamGoals;
  teamRow.goalsOwn += info.awayTeamGoals;
  teamRow.goalsBalance += info.homeTeamGoals - info.awayTeamGoals;

  if (info.homeTeamGoals === info.awayTeamGoals) {
    teamRow.totalDraws += 1;
    teamRow.totalPoints += 1;
  }

  if (info.homeTeamGoals > info.awayTeamGoals) {
    teamRow.totalVictories += 1;
    teamRow.totalPoints += 3;
  }

  if (info.homeTeamGoals < info.awayTeamGoals) {
    teamRow.totalLosses += 1;
  }

  teamRow.efficiency = calculateEfficiency(teamRow.totalPoints, teamRow.totalGames);

  return teamRow;
};

async function getTable() {
  const allTeams = await getAllTeams();
  const allMatches = await finishMatches();

  const table = allTeams.map((team) => {
    const teamRow = createteamRow(team.teamName);
    allMatches
      .filter((matche) => matche.homeTeam === team.id)
      .forEach((info) => incrementTable(teamRow, info));
    return teamRow;
  });

  return table;
}

export default async function orderTable() {
  const table = await getTable();
  return table.sort((a, b) => {
    if (b.totalPoints > a.totalPoints) return 1;
    if (a.totalPoints > b.totalPoints) return -1;

    if (b.goalsBalance > a.goalsBalance) return 1;
    if (a.goalsBalance > b.goalsBalance) return -1;

    if (b.goalsFavor > a.goalsFavor) return 1;
    if (a.goalsFavor > b.goalsFavor) return -1;

    if (b.goalsOwn > a.goalsOwn) return 1;
    if (a.goalsOwn > b.goalsOwn) return -1;
    return 0;
  });
}
