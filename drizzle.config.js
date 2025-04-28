import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_SVWl4PKw3hsF@ep-crimson-glitter-a4rbijsr-pooler.us-east-1.aws.neon.tech/ai-mocker?sslmode=require",
  },
});
