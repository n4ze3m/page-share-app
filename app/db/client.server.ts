import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema';

const { Pool } = pg;

declare global {
  var __db: ReturnType<typeof drizzle> | undefined;
}

let db: ReturnType<typeof drizzle>;

if (!global.__db) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  global.__db = drizzle(pool, { schema });
}

db = global.__db;

export { db };
