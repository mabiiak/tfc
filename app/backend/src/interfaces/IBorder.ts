export interface IMatchResume {
  teamId: number,
  goalsFavor: number,
  goalsOwn: number,
}

export interface ITotalResume {
  teamId: number,
  goalsFavor: number,
  goalsOwn: number,
}

export interface ITotalGames {
  name?: string
  // totalPoints: number,
  totalGames: number,
  // totalVictories: number,
  // totalDraws: number,
  // totalLosses: number,
  // goalsFavor: number,
  // goalsOwn: number,
  // goalsBalance: number,
  // efficiency: number,
}

export interface IBorder {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}
