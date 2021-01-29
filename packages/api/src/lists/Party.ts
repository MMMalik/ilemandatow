import { Relationship, Slug, Text, Uuid } from "@keystonejs/fields";
import { Color } from "@keystonejs/fields-color";
import { slugId } from "../utils";

export const Party = {
  fields: {
    id: {
      type: Uuid,
      knexOptions: { defaultTo: (knex: any) => knex.raw("gen_random_uuid()") },
    },
    name: { type: Text },
    fullName: { type: Text },
    abbr: { type: Text },
    color: { type: Color },
    colorDarkTheme: { type: Color },
    memberParties: { type: Relationship, ref: "Party", many: true },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
};
