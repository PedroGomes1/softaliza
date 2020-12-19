import Router from 'express';

import Event from './event.routes';
import CategoryEvent from './category-event.routes';
import Session from './session.routes';
import User from './user.routes';
import EnsureAuthenticate from '../middleware/EnsureAuthenticate';

const routes = Router();

routes.use('/session', Session);
routes.use('/user', User);

routes.use('/event', EnsureAuthenticate, Event);
routes.use('/event-category', EnsureAuthenticate, CategoryEvent);

export default routes;
