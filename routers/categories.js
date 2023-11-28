// Bookshop
import { Router } from "express";

// Controllers
import read from "../controllers/categories/read.js"
import create from "../controllers/categories/create.js";
import update from "../controllers/categories/update.js";
import destroy from "../controllers/categories/destroy.js";

// Middlewares
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import is_admin from "../middlewares/is_admin.js";

// Schema
import categorySchema from '../schemas/categories/create.js';

// Router
const categoriesRouter = Router();

categoriesRouter.get('/', read);
categoriesRouter.post('/', passport.authenticate('jwt', { session: false }), is_admin, validator(categorySchema), create);
categoriesRouter.put('/:id', passport.authenticate('jwt', { session: false }), is_admin, update);
categoriesRouter.delete('/:id', passport.authenticate('jwt', { session: false }), is_admin, destroy);

export default categoriesRouter;