import { join } from "path";
import * as Knex from "knex";
import { readDir, slugId } from "../../../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("PollCompany").del();

  await knex.schema.table("PollCompany", (table) => {
    table.string("deprecatedId");
  });

  const pollCompanies = (
    await readDir(join(__dirname, "../../../../../content/pollCompanies"))
  ).map((p) => JSON.parse(p));

  // Inserts seed entries
  await knex("PollCompany").insert(
    pollCompanies.map((company) => {
      const { id, name, abbr } = company;
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
