import {Request, Response} from 'express';
import { verifyRegister } from './service';

// Reveives the HTTP request and gives response

// export const registerController = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     const token = await verifyRegister(email, password);
//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error: any) {
//     console.error('[Register Error]', error.message);

//     if (error.message === 'User already exists') {
//       res.status(409).json({ error: 'User already exists' }); 
//       return 
//     }

//     res.status(500).json({ error: error.message || 'Registration failed' });
//   }
// };

