import Users from '../database/models/user';
import { Login } from '../interfaces/login';

async function postLogin(newLogin: Login) {
  const login = await Users.create({
    username: newLogin.username,
    role: newLogin.role,
    email: newLogin.email,
    password: newLogin.password,
  });
}

export default postLogin;
