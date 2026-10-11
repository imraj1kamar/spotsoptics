import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// Prisma 7+ requires passing the datasourceUrl explicitly in the constructor
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { prisma };