import { readFileSync } from 'fs';
import { sign, SignOptions, verify } from 'jsonwebtoken';
import { IUserResume } from '../interfaces/IUser';

const secret = readFileSync('jwt.evaluation.key', 'utf8');

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

type decodedData = {
  data: { role: string, userName: string },
};

export function newToken(info: IUserResume) {
  try {
    return sign({ data: info }, secret, jwtConfig);
  } catch (error) {
    console.log(error);
    return { err: error };
  }
}

export function decodedToken(token: string) {
  const decoded = verify(token, secret) as decodedData;
  if (decoded !== undefined) {
    return decoded.data.role;
  }
}
