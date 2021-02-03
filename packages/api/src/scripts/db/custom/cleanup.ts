import { exec } from "shelljs";
import { join } from "path";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

// Truncates all tables
exec(`psql -f ${join(__dirname, "../raw", "truncateTables.sql")}`);
