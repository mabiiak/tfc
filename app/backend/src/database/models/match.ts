import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

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

export default match;
