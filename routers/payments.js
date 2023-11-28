import { Router } from 'express';
import create from '../controllers/payments/create.js';

const routerPaymetns = Router();

routerPaymetns.post('/', create);

export default routerPaymetns;