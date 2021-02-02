import { Relationship, Slug, Text } from "@keystonejs/fields";
import { Color } from "@keystonejs/fields-color";
import { slugId } from "../../utils";
import { canEdit } from "../access";
import { idField } from "../common";

export const Party = {
  fields: {
    id: idField,
    name: { type: Text },
    fullName: { type: Text },
    abbr: { type: Text },
    color: { type: Color },
    colorDarkTheme: { type: Color },
    memberParties: { type: Relationship, ref: "Party", many: true },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
};
