import { Request, Response, NextFunction } from 'express';
import IError from '../interfaces/IError';

function isIError(err: unknown): err is IError {
  return (err as IError).status !== undefined && (err as IError).message !== undefined;
}

function handleError(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (typeof err === 'object' && isIError(err)) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'internal error' });
  }
}

export default handleError;
