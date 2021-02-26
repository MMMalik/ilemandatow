import { Integer, Text, Slug } from "@keystonejs/fields";
import { Markdown } from "@keystonejs/fields-markdown";
import { slugId } from "../../utils";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const Doc = {
  fields: {
    id: idField,
    title: { type: Text },
    body: { type: Markdown },
    order: { type: Integer },
    slug: {
      type: Slug,
      generate: slugId(["title"], true),
      isUnique: true,
      regenerateOnUpdate: false,
    },
  },
  labelResolver: (item: any) => item.title,
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
