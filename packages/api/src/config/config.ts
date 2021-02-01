export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

const envConfig = isProd ? { path: process.env.API_ENV_PATH } : undefined;

require("dotenv").config(envConfig);

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbUri = process.env.DB_URI;
const cookieSecret = process.env.COOKIE_SECRET;

const connection = `postgres://${dbUser}:${dbPass}@${dbUri}/${dbName}`;

export const config = {
  db: {
    client: "postgres",
    connection,
    seeds: {
      directory: "./build/seeds",
    },
  },
  cookie: {
    secure: isProd,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
    secret: cookieSecret,
  },
};
