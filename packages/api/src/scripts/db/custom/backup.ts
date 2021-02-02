import { mkdir, exec } from "shelljs";
import { setupPgEnv } from "../../../config";

// Setups env variables for source database
setupPgEnv();

const now = new Date().getTime();

// Creates backups folder if not exists
mkdir("-p", `~/postgres/backups/${process.env.PGDATABASE}`);

// Runs pg_dump command to a custom format
exec(
  `pg_dump -Fc > ~/postgres/backups/${process.env.PGDATABASE}/${now}_${process.env.PGDATABASE}`
);
