import * as minimist from "minimist";
import { exec, ls } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for target database
setupPgEnv();

// Parses command line args
const args = minimist(process.argv.slice(2));

// Restores from selected location
const location = args["location"] || process.env.PGDATABASE;

// Directory with backup files
const srcDir = `~/postgres/backups/${location}`;

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

// Runs pg_dump command on selected tables
exec(`pg_restore --no-owner -c -n public -d ${process.env.PGDATABASE} ${src}`);
