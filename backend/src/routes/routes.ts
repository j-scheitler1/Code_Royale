import { Router } from 'express';
import { loginController, registerController } from '../auth/controller';

// Define the route and connects it to the logic / controller

const router = Router();
router.post('/login', loginController); // POST /auth/login
router.post('/register', registerController); // POST /auth/register

export default router;

