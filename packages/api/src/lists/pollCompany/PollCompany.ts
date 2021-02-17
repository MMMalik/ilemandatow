import { Text, Slug } from "@keystonejs/fields";
import { dispatchChangeEvt, idField } from "../common";
import { slugId } from "../../utils";
import { canEdit } from "../access";

export const PollCompany = {
  fields: {
    id: idField,
    name: { type: Text },
    abbr: { type: Text },
    slug: { type: Slug, generate: slugId(["name"]), regenerateOnUpdate: false },
  },
  labelResolver: (item: any) => item.name,
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
