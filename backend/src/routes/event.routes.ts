import Router from 'express';
import EventController from '../controllers/EventController';

const routes = Router();

routes.get('/', EventController.index);
routes.post('/', EventController.create);
routes.put('/:idEvent', EventController.update);
routes.delete('/:idEvent', EventController.delete);

export default routes;
