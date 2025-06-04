import { Router } from 'express';
import { loginController } from './controller';

// Define the route and connects it to the logic / controller

const router = Router();
router.post('/login', loginController); // POST /auth/login

export default router;

