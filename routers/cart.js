// Bookshop
import { Router } from "express";

// Controllers
import create from "../controllers/carts/create.js";
import read_one from "../controllers/carts/read_one.js";
import destroy from "../controllers/carts/destroy.js";
import update from "../controllers/carts/update.js";
import read_creator from "../controllers/carts/read_creator.js";

// Middlewares
import passport from "../middlewares/passport.js";
import add_user_id from "../middlewares/add_user_id.js";
import is_user from "../middlewares/is_user.js";

// Router
const routerCart = Router();

routerCart.get('/creator', passport.authenticate('jwt', { session: false }), read_creator);
routerCart.get('/', passport.authenticate('jwt', { session: false }), read_one);
routerCart.post('/', passport.authenticate('jwt', { session: false }), add_user_id, create);
routerCart.delete('/:id', passport.authenticate('jwt', { session: false }), is_user, destroy);
routerCart.put('/:id', passport.authenticate('jwt', { session: false }), is_user, update);

export default routerCart;