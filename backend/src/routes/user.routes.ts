import Router from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';

const routes = Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    },
  }),
  UsersController.create,
);

export default routes;
