import { rm, ls } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

// Gets content of backup folder
const backups = ls(`~/postgres/backups/${process.env.PGDATABASE}`);

if (backups.length === 0) {
  throw new Error("No backup files were found.");
}

// Sorts files by timestamp descending
const [, , ...rest] = [...backups].sort((b1, b2) => {
  const [b1Stamp] = b1.split("_");
  const [b2Stamp] = b2.split("_");
  return parseInt(b2Stamp, 10) - parseInt(b1Stamp, 10);
});

// Removes all backup files except for latest two
if (rest.length > 0) {
  rm(
    rest.map((file) => `~/postgres/backups/${process.env.PGDATABASE}/${file}`)
  );
}
