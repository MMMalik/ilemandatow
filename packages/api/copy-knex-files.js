// Migration and seed files are created in build folder as per knex config
// Move new files back to src

const { join } = require("path");
const { mv } = require("shelljs");

const srcMigrations = `${join(
  __dirname,
  "./build/scripts/db/migrations/*.ts"
)}`;
const destMigrations = `${join(__dirname, "./src/scripts/db/migrations")}`;

const srcSeeds = `${join(__dirname, "./build/scripts/db/seeds/*.ts")}`;
const destSeeds = `${join(__dirname, "./src/scripts/db/seeds")}`;

// Move migrations
mv(srcMigrations, destMigrations);

// Move seeds
mv(srcSeeds, destSeeds);
