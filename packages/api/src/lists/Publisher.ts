import { Text, Slug, Uuid } from "@keystonejs/fields";
import { slugId } from "../utils";

export const Publisher = {
  fields: {
    id: {
      type: Uuid,
      knexOptions: { defaultTo: (knex: any) => knex.raw("gen_random_uuid()") },
    },
    name: { type: Text },
    abbr: { type: Text },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
};
