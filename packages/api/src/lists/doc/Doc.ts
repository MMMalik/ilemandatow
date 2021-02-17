import { Integer, Text, Slug, Virtual } from "@keystonejs/fields";
import { Markdown } from "@keystonejs/fields-markdown";
import * as showdown from "showdown";
import { slugId } from "../../utils";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

const converter = new showdown.Converter();

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
    bodyHtml: {
      type: Virtual,
      resolver: (item: any) => converter.makeHtml(item.body),
    },
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
  labelResolver: (item: any) => item.title,
};
