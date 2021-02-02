import * as Knex from "knex";
import * as bcryptjs from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("User").del();

  const admin = process.env.APP_ADMIN;
  const adminPswd = process.env.APP_ADMIN_PASS;
  const editor = process.env.APP_EDITOR;
  const editorPswd = process.env.APP_EDITOR_PASS;
  const viewer = process.env.APP_VIEWER;
  const viewerPswd = process.env.APP_VIEWER_PASS;

  if (!admin || !editor || !viewer) {
    throw new Error("Please provide non-empty username");
  }

  if (!adminPswd || !editorPswd || !viewerPswd) {
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
    {
      id: knex.raw("gen_random_uuid()"),
      username: editor,
      password: bcryptjs.hashSync(editorPswd),
      role: "Editor",
    },
    {
      id: knex.raw("gen_random_uuid()"),
      username: viewer,
      password: bcryptjs.hashSync(viewerPswd),
      role: "Viewer",
    },
  ]);
}
