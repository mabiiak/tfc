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

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default team;
