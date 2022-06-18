import { Router } from 'express';
import PostLogin from '../controllers/login';
import loginValidate from '../controllers/loginValidate';

const routerLogin = Router();

const login = new PostLogin();

routerLogin.post('/', login.execute);
routerLogin.get('/validate', loginValidate);

export default routerLogin;
