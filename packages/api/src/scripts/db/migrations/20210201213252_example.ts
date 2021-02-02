import * as Knex from "knex";

// Example migration
export async function up(knex: Knex): Promise<void> {
  await knex.raw("NULL;");
}

// Example migration
export async function down(knex: Knex): Promise<void> {
  await knex.raw("NULL;");
}
