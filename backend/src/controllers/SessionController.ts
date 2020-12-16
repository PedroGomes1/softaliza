import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import authJwtConfig from '../config/authJwt';
import BCryptHash from '../implementations/BCryptHashPassword';
import Users from '../models/User';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = getRepository(Users);

    const user = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return response
        .status(400)
        .json({ error: 'Invalid email/password combinations' });
    }

    const passwordIsMatch = await BCryptHash.compareHash(
      password,
      user.password,
    );

    if (!passwordIsMatch) {
      return response
        .status(400)
        .json({ error: 'Invalid email/password combinations' });
    }

    const { expiresIn, secret } = authJwtConfig;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    const { id, name } = user;

    return response.json({
      id,
      name,
      email,
      token,
    });
  },
};
