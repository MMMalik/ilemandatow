import * as minimist from "minimist";
import { mkdir, exec } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

// Parses command line args
const args = minimist(process.argv.slice(2));

// Location folder
const location = args["location"] || process.env.PGDATABASE;

// Skips user-related tables
const skipUsers = args["skip-users"];

const now = new Date().getTime();

const dest = `~/postgres/backups/${location}`;

const targetFile = `${dest}/${now}_${process.env.PGDATABASE}`;

// Creates backups folder if not exists
mkdir("-p", dest);

if (skipUsers) {
  // Runs pg_dump command to a custom format and skips user-related tables
  exec(`pg_dump -Fc -T "\\"User\\"" -T session > ${targetFile}`);
} else {
  // Runs pg_dump command to a custom format
  exec(`pg_dump -Fc > ${targetFile}`);
}
