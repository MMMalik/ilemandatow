import * as minimist from "minimist";
import { rm, ls } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

// Parses command line args
const args = minimist(process.argv.slice(2));

// Location folder
const location = args["location"] || process.env.PGDATABASE;

const dest = `~/postgres/backups/${location}`;

// Gets content of backup folder
const backups = ls(dest);

// Sorts files by timestamp descending
const [, , ...rest] = [...backups].sort((b1, b2) => {
  const [b1Stamp] = b1.split("_");
  const [b2Stamp] = b2.split("_");
  return parseInt(b2Stamp, 10) - parseInt(b1Stamp, 10);
});

// Removes all backup files except for latest two
rm(rest.map((file) => `${dest}/${file}`));
