import { Request, Response } from 'express';

function postLogin(req: Request, res: Response) {
  const { user } = req.body;
  console.log(user);
  console.log(res);
}

export default postLogin;
