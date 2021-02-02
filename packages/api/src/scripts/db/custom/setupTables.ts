import { join } from "path";
import { exec } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for target database
setupPgEnv();

// Creates session table
exec(`psql -f ${join(__dirname, "sessionTable.sql")}`);

// Creates tables managed by KeystoneJs
exec("keystone create-tables");

// Seeds initial data
exec("knex seed:run");
