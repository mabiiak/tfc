import { Model, DataTypes } from 'sequelize';
import db from '.';

class team extends Model {
  public teamName: string;
}

team.init({
  teamName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'team',
});

export default team;
