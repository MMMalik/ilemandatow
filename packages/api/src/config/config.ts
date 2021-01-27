export const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  require("dotenv").config();
}

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const connection = `postgres://${dbUser}:${dbPass}@localhost:5432/${dbName}`;

export const config = {
  db: {
    client: "postgres",
    connection,
    seeds: {
      directory: "./dist/seeds",
    },
  },
};
