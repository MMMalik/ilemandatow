import { Float, Relationship } from "@keystonejs/fields";
import { canEdit } from "../access";
import { idField } from "../common";

export const PollResult = {
  fields: {
    id: idField,
    result: { type: Float },
    party: { type: Relationship, ref: "Party" },
  },
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
};
