import * as minimist from "minimist";
import { exec, ls } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for target database
setupPgEnv();

// Parses command line args
const args = minimist(process.argv.slice(2));

// Restores from selected database
const sourceDbName = args["src-db"] || process.env.PGDATABASE;

// Directory with backup files
const srcDir = `~/postgres/backups/${sourceDbName}`;

// Prunes user table after restore
const pruneUsers = args["prune-users"];

// Gets content of backup folder
const backups = ls(srcDir);

if (backups.length === 0) {
  throw new Error("No backup files were found.");
}

// Finds latest backup file
const latest = backups.reduce((acc, file) => {
  const [stamp] = file.split("_");
  const [current] = acc.split("_");
  if (!current || parseInt(stamp, 10) > parseInt(current, 10)) {
    return file;
  }
  return acc;
}, "");

if (!latest) {
  throw new Error(
    "No backup file was found. Is the file format correct, i.e. {timestamp}_{dbname}?"
  );
}

const src = `${srcDir}/${latest}`;

// Runs pg_dump command
exec(`pg_restore -c -d ${process.env.PGDATABASE} ${src}`);

// Prunes user-related data
if (pruneUsers) {
  exec(
    `psql ${process.env.PGDATABASE} -c "truncate \\"User\\"; truncate session;"`
  );
}
