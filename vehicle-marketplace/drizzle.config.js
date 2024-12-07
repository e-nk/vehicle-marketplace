import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
	dbCredentials: {
    url: 'postgresql://neondb_owner:2Xst3RdjOwux@ep-odd-recipe-a4eqjo7g.us-east-1.aws.neon.tech/car-marketplace?sslmode=require',
  },

});
