import {
  CalendarDay,
  Integer,
  Float,
  Relationship,
  Select,
} from "@keystonejs/fields";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const ElectoralCode = {
  fields: {
    id: idField,
    inEffectSince: { type: CalendarDay },
    inEffectTo: { type: CalendarDay },
    threshold: { type: Float },
    totalSeats: { type: Integer },
    method: { type: Select, options: [{ label: "D'Hondt", value: "dhondt" }] },
    districts: { type: Relationship, ref: "ElectoralDistrict", many: true },
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
