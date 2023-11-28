
import { Router } from "express";
import productsRouter from "../routers/products.js";
import categoriesRouter from './categories.js';
import authRouter from './auth.js';
import routerStates from "./states.js";
import routerCreators from "./creators.js";
import routerCart from "./cart.js";
import routerPaymetns from "./payments.js";

const indexRouter = Router();

indexRouter.use('/products', productsRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/categories', categoriesRouter);
indexRouter.use('/states', routerStates);
indexRouter.use('/creators', routerCreators);
indexRouter.use('/carts', routerCart);
indexRouter.use('/payments', routerPaymetns);

export default indexRouter;

