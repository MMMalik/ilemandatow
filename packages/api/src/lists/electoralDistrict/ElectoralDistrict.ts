import { Integer, Text } from "@keystonejs/fields";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const ElectoralDistrict = {
  fields: {
    id: idField,
    district: { type: Integer },
    name: { type: Text },
    totalSeats: { type: Integer },
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
