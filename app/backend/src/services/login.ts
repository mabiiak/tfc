// const create = async (newUser) => {
//   const user = await User.create({
//     displayName: newUser.displayName,
//     email: newUser.email,
//     password: newUser.password,
//     image: newUser.image,
//   });
//   return user;

import { Create } from 'sequelize'; 
import Users from '../database/models/index';

async function postLogin(newLogin) {
  const login = await Users.create({
    username: newLogin.username,
    role: newLogin.role,
    email: newLogin.email,
    password: newLogin.password,
  });
}

export default postLogin;
