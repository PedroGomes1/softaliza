import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/authJwt';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function EnsureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void | Response {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'JWT is required ' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedJWT = verify(token, authConfig.secret);

    const { sub } = decodedJWT as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    return response.status(400).json({ error: 'JWT Invalid' });
  }
}
