import { join } from "path";
import * as Knex from "knex";
import { readDir, slugId } from "../../../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("Party").del();

  await knex.schema.table("Party", (table) => {
    table.string("deprecatedId");
  });

  const parties = (
    await readDir(join(__dirname, "../../../../../content/parties"))
  ).map((p) => JSON.parse(p));

  // Inserts seed entries
  const insertedParties: any[] = await knex("Party")
    .returning("*")
    .insert(
      parties.map((party) => {
        const { id, name, abbr, fullName, color, colorDarkTheme } = party;
        return {
          id: knex.raw("gen_random_uuid()"),
          deprecatedId: id,
          name,
          abbr,
          fullName,
          color,
          colorDarkTheme,
          slug: slugId(["name"])({ resolvedData: { name } }),
        };
      })
    );

  // Update internal dependencies
  await knex("Party_memberParties_many").insert(
    insertedParties
      .map((insertedParty) => {
        const { memberParties } = parties.find(
          (p) => p.id === insertedParty.deprecatedId
        );
        return memberParties.map(({ party___NODE }: any) => {
          const mPartyToJoin = insertedParties.find(
            (p) => p.deprecatedId === party___NODE
          );
          return {
            Party_left_id: insertedParty.id,
            Party_right_id: mPartyToJoin.id,
          };
        });
      })
      .reduce((acc, row) => acc.concat(row), [])
  );
}
