// bookshop
import { Router } from "express";

// Controllers
import read from "../controllers/products/read.js";
import readAdmi from "../controllers/products/readAdmi.js";
import read_one from "../controllers/products/read_one.js";
import destroy from "../controllers/products/destroy.js";
import update from "../controllers/products/update.js";
import create from "../controllers/products/create.js";
import readCreator from '../controllers/products/readCreator.js';

// Middlewares
import passport from '../middlewares/passport.js';
import is_creator_or_admin from "../middlewares/is_creator_or_admin.js";
import validator from '../middlewares/validator.js';
import add_creator_in_product from "../middlewares/add_creator_in_product.js";
import validate_role from "../middlewares/validate_role.js";

// Schema
import schemaProduct from '../schemas/products/create.js';

// Router
const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get('/:id', read_one);
productsRouter.get("/admi", readAdmi);
productsRouter.get("/creator", passport.authenticate('jwt', { session: false }), validate_role, readCreator);
productsRouter.post('/', passport.authenticate('jwt', { session: false }), is_creator_or_admin, validator(schemaProduct), add_creator_in_product, create);
productsRouter.delete('/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, destroy);
productsRouter.put('/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, update);

export default productsRouter;