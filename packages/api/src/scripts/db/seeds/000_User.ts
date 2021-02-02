import * as Knex from "knex";
import * as bcryptjs from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("User").del();

  const admin = process.env.APP_ADMIN;
  const adminPswd = process.env.APP_ADMIN_PASS;

  if (!admin) {
    throw new Error("Please provide non-empty username");
  }

  if (!adminPswd) {
    throw new Error("Please provide non-empty user password");
  }

  // Inserts seed entries
  await knex("User").insert([
    {
      id: knex.raw("gen_random_uuid()"),
      username: admin,
      password: bcryptjs.hashSync(adminPswd),
      role: "Admin",
    },
  ]);
}
