import Router from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CategoryEventController from '../controllers/CategoryEvent';

const routes = Router();

routes.get('/', CategoryEventController.index);

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required().min(5),
    },
  }),
  CategoryEventController.create,
);

routes.put(
  '/:idEventCategory',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required().min(5),
    },
    [Segments.PARAMS]: Joi.object().keys({
      idEventCategory: Joi.number().required(),
    }),
  }),
  CategoryEventController.update,
);

routes.delete(
  '/:idEventCategory',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idEventCategory: Joi.number().required(),
    }),
  }),
  CategoryEventController.delete,
);

export default routes;
