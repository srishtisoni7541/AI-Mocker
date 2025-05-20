import dotenv from 'dotenv'; // Import dotenv to load environment variables
import { neon } from '@neondatabase/serverless'; // Correct neon import
import { drizzle } from 'drizzle-orm/neon-http'; // Correct drizzle import
import * as schema from './schema'; // Your schema import


dotenv.config();

// If DATABASE_URL is not set, throw an error
if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

// Initialize the Neon client with the DATABASE_URL
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

// Set up the drizzle ORM client with your schema
export const db = drizzle({ client: sql, schema });




