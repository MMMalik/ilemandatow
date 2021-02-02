export const isDev = process.env.NODE_ENV === "development";

export const isProd = process.env.NODE_ENV === "production";

/**
 * Setups app-wide environment variables.
 */
export const setupEnv = () => {
  const envConfig = isProd ? { path: process.env.API_ENV_PATH } : undefined;
  require("dotenv").config(envConfig);
};

/**
 * Setups env variables specific to PostgreSQL.
 */
export const setupPgEnv = () => {
  setupEnv();
  const [host, port] = process.env.DB_URI?.split(":") ?? [];

  process.env.PGUSER = process.env.DB_USER;
  process.env.PGPASSWORD = process.env.DB_PASS;
  process.env.PGDATABASE = process.env.DB_NAME;
  process.env.PGHOST = host;
  process.env.PGPORT = port;
};
