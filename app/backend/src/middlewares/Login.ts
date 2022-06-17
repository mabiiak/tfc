import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const schemaLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schemaLogin.validate(req.body);

  if (error) {
    const err = {
      status: 401,
      message: 'Incorrect email or password'
    }
    // return next(err);
    return res.status(400).json(error.message);
  }
}

export default validateLogin;
