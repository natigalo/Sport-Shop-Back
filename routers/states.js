// Bookshop
import { Router } from "express";
import read from "../controllers/states/read.js";
// import create from "../controllers/states/create.js";

const routerStates = Router();

routerStates.get('/', read);
// routerStates.post('/', create);

export default routerStates;