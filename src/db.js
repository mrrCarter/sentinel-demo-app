import { existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import Database from "better-sqlite3";

const DB_PATH = process.env.DB_PATH || join(process.cwd(), "data", "app.db");

// Ensure data directory exists
const dir = dirname(DB_PATH);
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email_verified INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

export default db;
