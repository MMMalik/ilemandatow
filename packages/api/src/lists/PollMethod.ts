import { Text, Uuid, Slug } from "@keystonejs/fields";
import { slugId } from "../utils";

export const PollMethod = {
  fields: {
    id: {
      type: Uuid,
      knexOptions: { defaultTo: (knex: any) => knex.raw("gen_random_uuid()") },
    },
    name: { type: Text },
    fullName: { type: Text },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
};
