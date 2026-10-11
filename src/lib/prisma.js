import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// Agar global prisma exist nahi karta toh naya banao
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Development mein isi instance ko use karo taaki connection limit cross na ho
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
