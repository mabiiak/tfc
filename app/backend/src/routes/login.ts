import { Router } from 'express';
import PostLogin from '../controllers/login';
import validateLogin from '../middlewares/Login';

const routerLogin = Router();

const login = new PostLogin();

routerLogin.post('/',
// validateLogin,
login.execute);

export default routerLogin;
