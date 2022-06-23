import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import team from './team';

class match extends Model {
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: boolean;
}

match.init({
  homeTeam: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeam: INTEGER,
  awayTeamGoals: INTEGER,
  inProgress: BOOLEAN,
}, {
  timestamps: false,
  sequelize: db,
  modelName: 'match',
});

// match.belongsTo(team, { foreignKey: 'homeTeam', as: 'teamHome' });
// match.belongsTo(team, { foreignKey: 'awayTeam', as: 'teamAway' });

// team.hasMany(match, { foreignKey: 'homeTeam', as: 'teamHome' });
// team.hasMany(match, { foreignKey: 'awayTeam', as: 'teamAway' });

export default match;
