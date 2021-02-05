import * as Knex from "knex";

const order = [
  { name: "Lewica", order: 1 },
  { name: "Koalicja Obywatelska", order: 3 },
  { name: "Polska 2050", order: 4 },
  { name: "PSL", order: 5 },
  { name: "Agrounia", order: 5 },
  { name: "Koalicja Polska-PSL", order: 5 },
  { name: "Kukiz'15	", order: 6 },
  { name: "Prawo i Sprawiedliwość", order: 7 },
  { name: "Zjednoczona Prawica	", order: 7 },
  { name: "Konfederacja", order: 8 },
];

export async function up(knex: Knex): Promise<void> {
  const hasParliamentOrderColumn = await knex.schema.hasColumn(
    "Party",
    "parliamentOrder"
  );
  if (!hasParliamentOrderColumn) {
    await knex.schema.table("Party", (table) => {
      table.integer("parliamentOrder");
    });
    const parties = await knex("Party").select("id", "name");

    await Promise.all(
      parties.map(({ id, name }) => {
        const config = order.find((o) => o.name === name);
        return knex("Party")
          .where("id", "=", id)
          .update({
            parliamentOrder: config?.order ?? null,
          });
      })
    );
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasParliamentOrderColumn = await knex.schema.hasColumn(
    "Party",
    "parliamentOrder"
  );
  if (hasParliamentOrderColumn) {
    await knex.schema.table("Party", (table) => {
      table.dropColumn("parliamentOrder");
    });
  }
}
