import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('test1234', 10);

  await prisma.user.createMany({
    data: [
      {
        email: 'user1@example.com',
        password: passwordHash,
      },
      {
        email: 'user2@example.com',
        password: passwordHash,
      },
    ],
    skipDuplicates: true, // avoids errors if rerun
  });

  console.log('🌱 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
