import { Float, Relationship, Uuid } from "@keystonejs/fields";

export const PollResult = {
  fields: {
    id: {
      type: Uuid,
      knexOptions: { defaultTo: (knex: any) => knex.raw("gen_random_uuid()") },
    },
    result: { type: Float },
    party: { type: Relationship, ref: "Party" },
  },
};
