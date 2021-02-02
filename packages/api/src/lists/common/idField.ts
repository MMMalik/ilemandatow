import { Uuid } from "@keystonejs/fields";

export const idField = {
  type: Uuid,
  knexOptions: { defaultTo: (knex: any) => knex.raw("gen_random_uuid()") },
};
