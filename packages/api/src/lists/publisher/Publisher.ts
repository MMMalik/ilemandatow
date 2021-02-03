import { Text, Slug } from "@keystonejs/fields";
import { idField } from "../common";
import { slugId } from "../../utils";
import { canEdit } from "../access";

export const Publisher = {
  fields: {
    id: idField,
    name: { type: Text },
    abbr: { type: Text },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
};