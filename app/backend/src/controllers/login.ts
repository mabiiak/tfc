import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/users';
import newToken from '../utils/jwt';

interface ILogin {
  execute: controller,
}

type controller = (req: Request, res: Response, next: NextFunction) =>
Promise<Response<unknown, Record<string, unknown>> | undefined | void>;

class PostLogin implements ILogin {
  private _service;

  constructor() {
    this._service = new LoginService();
  }

  public execute = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log(email, password);
    
    if (!email || !password) return res.status(400).json({ message: "All fields must be filled" }); 

    const user = await this._service.execute({ email, password });

    if (user.err) return next(user.err);

    const token = newToken(user);

    if (typeof token !== 'string') return next(token);
    // if ('err' in token) // dois objetos --> ajuda do vinicius tanaka

    return res.status(200).json({ user, token });
  };
}

export default PostLogin;
