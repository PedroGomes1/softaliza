import Router from 'express';

import Event from './event.routes';
import CategoryEvent from './category-event.routes';
import Session from './session.routes';
import User from './user.routes';

import EnsureAuthenticate from '../middleware/EnsureAuthenticate';

const routes = Router();

routes.use('/session', Session);
routes.use('/user', User);

routes.use(EnsureAuthenticate);

routes.use('/event', Event);
routes.use('/event-category', CategoryEvent);

export default routes;
