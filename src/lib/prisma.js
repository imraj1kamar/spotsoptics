import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    return new PrismaClient();
  }

  try {
    const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
    const mariadb = require('mariadb');

    // The mariadb driver requires mariadb:// URL scheme instead of mysql://
    const dbUrl = process.env.DATABASE_URL.replace(/^mysql:\/\//i, 'mariadb://');
    const pool = mariadb.createPool(dbUrl);
    const adapter = new PrismaMariaDb(pool);
    return new PrismaClient({ adapter });
  } catch (err) {
    // Fallback to standard PrismaClient if driver adapter fails
    return new PrismaClient();
  }
}

// Fallback proxy to ensure model methods exist if DB is offline or during build evaluation
const dummyPrismaProxy = new Proxy(
  {},
  {
    get(_target, prop) {
      if (prop === 'then') return undefined;
      return new Proxy(
        {},
        {
          get() {
            return () => Promise.reject(new Error('Prisma database is unavailable.'));
          },
        }
      );
    },
  }
);

let clientInstance;
try {
  clientInstance = globalForPrisma.prisma || createPrismaClient();
} catch (e) {
  clientInstance = dummyPrismaProxy;
}

export const prisma = clientInstance || dummyPrismaProxy;

if (process.env.NODE_ENV !== 'production' && prisma && prisma !== dummyPrismaProxy) {
  globalForPrisma.prisma = prisma;
}

export default prisma;