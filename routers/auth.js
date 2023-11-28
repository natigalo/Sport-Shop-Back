// Bookshop
import { Router } from "express";

// Controllers
import register from "../controllers/auth/register.js";
import signout from "../controllers/auth/signout.js";
import readAdmi from "../controllers/auth/readAdmi.js";
import sigin from '../controllers/auth/signIn.js';
import token from '../controllers/auth/signin_token.js';

// Middlewares
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";
import same_passwords from "../middlewares/same_passwords.js";
import accountNotExists from '../middlewares/accountNotExists.js';
import validate_password from '../middlewares/validate_password.js';
import generateToken from '../middlewares/generateToken.js';

// Schemas
import registerSchema from "../schemas/auth/register.js";
import loginSchema from '../schemas/auth/sigin.js';

// Router
const authRouter = Router();

// Endpoints
authRouter.get('/admi', readAdmi);
authRouter.post('/login', validator(loginSchema), accountNotExists, validate_password, generateToken, sigin);
authRouter.post('/token', passport.authenticate('jwt', { session: false }), generateToken, token);
authRouter.post('/register', validator(registerSchema), accountExists, same_passwords, createHash, register);
authRouter.post('/signout', passport.authenticate('jwt', { session: false }), signout);

export default authRouter;