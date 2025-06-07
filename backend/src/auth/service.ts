import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { LoginRequest } from './types';
// import { RegisterRequest } from './types';

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

export async function verifyRegister(username: string, password: string) {
  const prisma = new PrismaClient();
  const existingUser = await prisma.user.findUnique({ where: { email: username } });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: username,
      password: hashedPassword,
    },
  });
  
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT secret is not defined");

  return jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );
}