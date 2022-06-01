import { Model, STRING } from 'sequelize';
import db from '.';

class user extends Model {
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

user.init({
  username: STRING,
  role: STRING,
  email: STRING,
  password: STRING,
}, {
  timestamps: false,
  sequelize: db,
  modelName: 'user',
});

export default user;
