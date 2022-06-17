import { compareSync } from 'bcryptjs';
import Users from '../database/models/user';
import IReq from '../interfaces/IRes';
import { IUserResume } from '../interfaces/IUser';

class LoginService {
  public execute = async ({ email, password }: IReq) => {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return { err: { status: 401, message: 'Incorrect email or password' } };
    }

    const checkPass = compareSync(password, user.password);
    if (!checkPass) {
      return { err: { status: 401, message: 'Incorrect email or password' } };
    }

    const { id, username, role } = user as IUserResume;
    return { id, username, role, email };
  };
}

export default LoginService;
