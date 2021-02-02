import { Text, Slug } from "@keystonejs/fields";
import { idField } from "../common";
import { slugId } from "../../utils";
import { canEdit, canView } from "../access";

export const PollMethod = {
  fields: {
    id: idField,
    name: { type: Text },
    fullName: { type: Text },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
  access: {
    read: canView,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
};
