
import { register, login } from '../controller/authConrollers.js';
import { Router } from 'express';
const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

export default authRouter;