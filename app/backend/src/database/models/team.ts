import { Model, DataTypes } from 'sequelize';
import db from '.';

class team extends Model {
  public teamName: string;
  public id: number;
}

team.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'team',
});

export default team;
