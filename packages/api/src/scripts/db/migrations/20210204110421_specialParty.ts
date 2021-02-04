import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTypeColumn = await knex.schema.hasColumn("Party", "type");
  if (!hasTypeColumn) {
    await knex.schema.table("Party", (table) => {
      table.string("type");
    });
    const parties = await knex("Party").select("id", "name");

    await Promise.all(
      parties.map(({ id, name }) => {
        return knex("Party")
          .where("id", "=", id)
          .update({
            type:
              name === "Inna Partia"
                ? "other_party_voters"
                : name === "Niezdecydowani"
                ? "undecided_voters"
                : "regular",
          });
      })
    );
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTypeColumn = await knex.schema.hasColumn("Party", "type");
  if (hasTypeColumn) {
    await knex.schema.table("Party", (table) => {
      table.dropColumn("type");
    });
  }
}
