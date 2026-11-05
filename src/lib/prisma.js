import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { Pool } from 'pg';

const globalForPrisma = globalThis;

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL || '';

  let adapter;
  if (connectionString.startsWith('mysql://') || connectionString.startsWith('mariadb://')) {
    adapter = new PrismaMariaDb(connectionString);
  } else {
    const pool = new Pool({
      connectionString,
      ssl: connectionString.includes('sslmode=') ? { rejectUnauthorized: false } : undefined,
    });
    adapter = new PrismaPg(pool);
  }

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });
}

const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { prisma };

