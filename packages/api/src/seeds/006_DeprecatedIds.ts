import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  await Promise.all(
    ["Party", "Publisher", "PollCompany", "Poll"].map((name) => {
      return knex.schema.table(name, (table) => {
        table.dropColumn("deprecatedId");
      });
    })
  );
}
