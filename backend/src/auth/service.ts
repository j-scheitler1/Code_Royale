import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { LoginRequest } from './types';

// Business Logic - Talks to DB and Checks Credentials

export async function verifyLogin(username: string, password: string) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({ where: { email: username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  return jwt.sign(
    { userId: user.id},
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );
}