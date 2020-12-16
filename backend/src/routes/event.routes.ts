import Router from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import EventController from '../controllers/EventController';

const routes = Router();

routes.get('/', EventController.index);

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required().min(5),
      description: Joi.string().required().min(5),
      date: Joi.date().required(),
      hour: Joi.string().required(),
      email: Joi.string().email().required(),
      telephone: Joi.string().required().min(10).max(14),
      address: Joi.string().required(),
      category_id: Joi.number().required(),
    },
  }),
  EventController.create,
);

routes.put(
  '/:idEvent',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.date().required(),
      hour: Joi.string().required(),
      email: Joi.string().email().required(),
      telephone: Joi.string().required(),
      address: Joi.string().required(),
      category_id: Joi.number().required(),
    },
    [Segments.PARAMS]: Joi.object().keys({
      idEvent: Joi.number().required(),
    }),
  }),
  EventController.update,
);

routes.delete(
  '/:idEvent',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idEvent: Joi.number().required(),
    }),
  }),
  EventController.delete,
);

export default routes;
