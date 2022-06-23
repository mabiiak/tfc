import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import team from './team';

class match extends Model {
  public id!: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: boolean;
}

match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'match',
});

match.belongsTo(team, { foreignKey: 'homeTeam', as: 'teamHome' });
match.belongsTo(team, { foreignKey: 'awayTeam', as: 'teamAway' });

team.hasMany(match, { foreignKey: 'homeTeam', as: 'teamHome' });
team.hasMany(match, { foreignKey: 'awayTeam', as: 'teamAway' });

export default match;
