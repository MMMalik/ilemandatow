import * as Knex from "knex";
import { slugId } from "../../../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("PollMethod").del();

  // Inserts seed entries
  await knex("PollMethod").insert(
    [
      { name: "CATI", fullName: "Computer Assisted Telephone Interviewing" },
      { name: "CAWI", fullName: "Computer Assisted Web Interview" },
      { name: "Unknown", fullName: "Unknown" },
    ].map((method) => ({
      id: knex.raw("gen_random_uuid()"),
      ...method,
      slug: slugId(["name"])({ resolvedData: method }),
    }))
  );
}
