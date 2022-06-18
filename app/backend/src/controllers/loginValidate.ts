import { NextFunction, Request, Response } from 'express';
import { decodedToken } from '../utils/jwt';

function loginValidate(req: Request, res: Response, _next: NextFunction) {
  const { authorization } = req.headers;

  const token = authorization;
  if (!token) {
    res.status(401).json({ message: 'Token não econtrado' });
  }

  if (token !== undefined) {
    const checkToken = decodedToken(token);

    if (checkToken !== undefined) {
      res.status(200).json(checkToken);
    }
  }
}

export default loginValidate;
