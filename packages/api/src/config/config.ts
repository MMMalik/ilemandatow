import { isProd, setupEnv } from "./env";

const pkg = require("../../package.json");

setupEnv();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbUri = process.env.DB_URI;
const repo = process.env.GH_REPO ?? "";
const repoOwner = process.env.GH_REPO_OWNER ?? "";
const repoEventType = process.env.GH_REPO_EVENT_TYPE ?? "";
const ghAccessToken = process.env.GH_ACCESS_TOKEN;
const cookieSecret = process.env.COOKIE_SECRET;

const connection = `postgres://${dbUser}:${dbPass}@${dbUri}/${dbName}`;

export const config = {
  app: {
    version: pkg.version,
  },
  db: {
    client: "postgres",
    connection,
    seeds: {
      directory: "./build/scripts/db/seeds",
      extension: "ts",
    },
    migrations: {
      directory: "./build/scripts/db/migrations",
      extension: "ts",
    },
    drop: false,
  },
  cookie: {
    secure: isProd,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
    secret: cookieSecret,
  },
  github: {
    accessToken: ghAccessToken,
    repo,
    repoOwner,
    repoEventType,
  },
};
