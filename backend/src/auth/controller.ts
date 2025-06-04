import {Request, Response} from 'express';
import { verifyLogin} from './service';

// Reveives the HTTP request and gives response

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await verifyLogin(email, password);
    res.status(200).json({ token })
  } catch (error) {
    res.status(401).json({ error: 'Invalid email or password' }); // failure
  }
};