import { Router } from 'express';
import PostLogin from '../controllers/login';

const routerLogin = Router();

const login = new PostLogin();

routerLogin.post('/', login.execute);

export default routerLogin;
