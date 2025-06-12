// src/routes/auth.routes.ts
import { Router } from 'express';
import { verifyLogin, verifyRegister } from '../auth/service';

const router = Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await verifyLogin(username, password);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000,
    });
    res.status(200).json({ message: 'Login successful' });
  } catch (e) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await verifyRegister(username, password);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000,
    });
    res.status(201).json({ message: 'Registration successful' });
  } catch (e) {
    res.status(400).json({ error: 'Registration Failed' });
  }
});

export default router;
