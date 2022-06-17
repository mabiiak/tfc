import { readFileSync } from 'fs';
import { sign, SignOptions } from 'jsonwebtoken';
import { IUserResume } from '../interfaces/IUser';

// const secret = 'secrettoken';
const secret = readFileSync('jwt.evaluation.key', 'utf8');

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default function newToken(info: IUserResume) {
  try {
    console.log(secret);
    return sign({ data: info }, secret, jwtConfig);
  } catch (error) {
    console.log(error);
    return { err: error };
  }
}
