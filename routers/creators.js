// Bookshop
import { Router } from 'express';

// Controllers
import create from '../controllers/creators/create.js';
import readOne from '../controllers/creators/readOne.js';
import destroy from '../controllers/creators/destroy.js';
import read from '../controllers/creators/read.js';
import update from '../controllers/creators/update.js'

// Middleware
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import is_creator from '../middlewares/is_creator.js';
import is_creator_or_admin from '../middlewares/is_creator_or_admin.js';

// Schema
import schemaCreator from '../schemas/creators/create.js';
import exists_creator from '../middlewares/exists_creator.js';


// Router
const routerCreators = Router();

routerCreators.post('/', passport.authenticate('jwt', { session: false }), exists_creator, validator(schemaCreator), create);
routerCreators.post('/:id', is_creator, readOne);
routerCreators.delete('/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, destroy);
routerCreators.get('/', read);
routerCreators.put('/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, update);

export default routerCreators;