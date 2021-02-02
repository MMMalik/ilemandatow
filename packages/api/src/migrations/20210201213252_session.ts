import { join } from "path";
import * as Knex from "knex";
import { readFileP } from "../utils";

export async function up(knex: Knex): Promise<void> {
  const tableSql = await readFileP(
    join(
      __dirname,
      "../../../../node_modules",
      "connect-pg-simple",
      "table.sql"
    ),
    "utf8"
  );
  const hasTable = await knex.schema.hasTable("session");
  if (!hasTable) {
    await knex.raw(tableSql);
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("session");
}
