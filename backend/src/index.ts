import express from 'express';
import authRoutes from './routes/auth.routes'; // adjust if needed
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json()); 
app.use(cookieParser());

app.use('/api/auth', authRoutes); 


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});