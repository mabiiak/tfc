import { Router } from 'express';
import postLogin from '../controllers/login';

const routerLogin = Router();

routerLogin.post('/', postLogin);

export default routerLogin;
