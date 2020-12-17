import Router from 'express';

import multer from 'multer';

import Event from './event.routes';
import CategoryEvent from './category-event.routes';
import Session from './session.routes';
import User from './user.routes';

import uploadImage from '../config/uploadImage';

import EnsureAuthenticate from '../middleware/EnsureAuthenticate';

const upload = multer(uploadImage);

const routes = Router();

routes.use('/session', Session);
routes.use('/user', User);

routes.use(EnsureAuthenticate);

routes.use('/event', upload.single('image'), Event);
routes.use('/event-category', CategoryEvent);

export default routes;
