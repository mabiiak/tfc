import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';
import { verify } from 'jsonwebtoken';

import { checkUser } from '../services/users';

const secret = readFileSync('jwt.evaluation.key', 'utf8');

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (authorization === undefined) return res.status(404).json({ message: 'not found token user' });

  verify(authorization, secret, (error, decoded) => {
    if (error) {
      const err = {
        status: 404,
        message: error.message,
      };
      next(err);
    }

    if (decoded) {
      const user = decoded.data.email;
      checkUser(user);
    }
  });

  next();
}
