import express from 'express';
import authRoutes from './auth/routes'; // adjust if needed
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); 
app.use('/api/auth', authRoutes); 
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});