import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '~/drizzle/schema';

export const sqlite = new Database('quarm_2023-12-13-19_15.db');
export const db: BetterSQLite3Database = drizzle(sqlite, { schema });