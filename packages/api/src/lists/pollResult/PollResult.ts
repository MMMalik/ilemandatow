import { Float, Relationship } from "@keystonejs/fields";
import { canEdit } from "../access";
import { dispatchChangeEvt, idField } from "../common";

export const PollResult = {
  fields: {
    id: idField,
    result: { type: Float },
    party: { type: Relationship, ref: "Party" },
  },
  labelResolver: async ({ result, party }: any, _: any, context: any) => {
    const { data } = await context.executeGraphQL({
      query: `query {
          Party(where: {id: "${party}" }) {
            name
          }
        }`,
    });
    return `${data.Party?.name} - ${result}%`;
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
