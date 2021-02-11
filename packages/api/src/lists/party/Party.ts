import { Select, Relationship, Slug, Integer, Text } from "@keystonejs/fields";
import { Color } from "@keystonejs/fields-color";
import { slugId } from "../../utils";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const Party = {
  fields: {
    id: idField,
    name: { type: Text },
    fullName: { type: Text },
    abbr: { type: Text },
    type: {
      type: Select,
      options: [
        { label: "Regular party", value: "regular" },
        { label: "Undecided voters (placeholder)", value: "undecided_voters" },
        {
          label: "Other party voters (placeholder)",
          value: "other_party_voters",
        },
      ],
    },
    color: { type: Color },
    colorDarkTheme: { type: Color },
    parliamentOrder: { type: Integer },
    memberParties: { type: Relationship, ref: "Party", many: true },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
  hooks: {
    afterChange: async ({ operation }: any) => {
      if (operation === "update") {
        await dispatchChangeEvt();
      }
    },
  },
};
