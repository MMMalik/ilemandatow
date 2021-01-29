import { join } from "path";
import * as Knex from "knex";
import { readDir, slugId } from "../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("Publisher").del();

  await knex.schema.table("Publisher", (table) => {
    table.string("deprecatedId");
  });

  const publishers = (
    await readDir(join(__dirname, "../../../content/publishers"))
  ).map((p) => JSON.parse(p));

  // Inserts seed entries
  await knex("Publisher").insert(
    publishers.map((publisher) => {
      const { id, name, abbr } = publisher;
      return {
        id: knex.raw("gen_random_uuid()"),
        deprecatedId: id,
        name,
        abbr,
        slug: slugId(["name"])({ resolvedData: { name } }),
      };
    })
  );
}
