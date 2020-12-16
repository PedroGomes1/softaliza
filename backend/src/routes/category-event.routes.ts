import Router from 'express';
import CategoryEventController from '../controllers/CategoryEvent';

const routes = Router();

routes.get('/', CategoryEventController.index);
routes.post('/', CategoryEventController.create);
routes.put('/:idEventCategory', CategoryEventController.update);
routes.delete('/:idEventCategory', CategoryEventController.delete);

export default routes;
