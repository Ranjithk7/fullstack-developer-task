import { drizzle } from 'drizzle-orm/vercel-postgres';
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

export const db = drizzle(pool);