import { exec } from "shelljs";
import { join } from "path";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

// Runs pg_dump command to a custom format
exec(`psql -f ${join(__dirname, "truncateTables.sql")}`);
