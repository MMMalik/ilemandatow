import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasDocTable = await knex.schema.hasTable("Doc");

  if (!hasDocTable) {
    await knex.schema.createTable("Doc", (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .defaultTo(knex.raw("gen_random_uuid()"));
      table.integer("order");
      table.text("title");
      table.text("body");
      table.text("slug");
    });
  }

  const hasDocSectionTable = await knex.schema.hasTable("DocSection");

  if (!hasDocSectionTable) {
    await knex.schema.createTable("DocSection", (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .defaultTo(knex.raw("gen_random_uuid()"));
      table.integer("order");
      table.text("language");
      table.text("title");
    });
  }

  const hasRelTable = await knex.schema.hasTable("DocSection_docs_many");

  if (!hasRelTable) {
    await knex.schema.createTable("DocSection_docs_many", (table) => {
      table.uuid("DocSection_left_id");
      table.uuid("Doc_right_id");
      table
        .foreign("DocSection_left_id")
        .references("id")
        .inTable("DocSection");
      table.foreign("Doc_right_id").references("id").inTable("Doc");
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("DocSection_docs_many");
  await knex.schema.dropTableIfExists("Doc");
  await knex.schema.dropTableIfExists("DocSection");
}
