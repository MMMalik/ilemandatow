import { join } from "path";
import { exec } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for target database
setupPgEnv();

exec(
  `psql -f ${join(
    __dirname,
    "../../../../../../node_modules",
    "connect-pg-simple",
    "table.sql"
  )}`
);
