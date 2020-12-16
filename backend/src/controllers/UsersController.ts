import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import BCryptHash from '../implementations/BCryptHashPassword';
import Users from '../models/User';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = getRepository(Users);

    const checkUserExists = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (checkUserExists) {
      return response.json({ error: 'User already exists' });
    }

    const hashPassword = await BCryptHash.generateHash(password);

    const users = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(users);

    return response.json({ name, email });
  },
};
