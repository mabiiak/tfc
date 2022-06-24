import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';
import { verify } from 'jsonwebtoken';

import { checkUser } from '../services/users';

const secret = readFileSync('jwt.evaluation.key', 'utf8');

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (authorization === undefined) return res.status(404).json({ message: 'not found' });

  verify(authorization, secret, (error, decoded) => {
    if (error) {
      const err = {
        status: 404,
        message: error.message,
      };
      next(err);
    }

    // console.log(decoded);
    if (decoded) {
      const user = decoded.data.email;
      console.log(user);
      checkUser(user);
    }
    // return decoded;
  });

  next();
}
