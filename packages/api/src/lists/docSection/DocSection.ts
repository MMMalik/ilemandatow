import { Integer, Relationship, Select, Text } from "@keystonejs/fields";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const DocSection = {
  fields: {
    id: idField,
    title: { type: Text },
    language: {
      type: Select,
      options: ["pl", "en"],
    },
    order: { type: Integer },
    docs: { type: Relationship, ref: "Doc", many: true },
  },
  access: {
    read: true,
    create: canEdit,
    update: canEdit,
    delete: canEdit,
  },
  hooks: {
    afterChange: async () => {
      await dispatchChangeEvt();
    },
  },
  labelResolver: (item: any) => item.title,
};
