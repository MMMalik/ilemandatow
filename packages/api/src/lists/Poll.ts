import { ListSchema } from "@keystonejs/keystone";
import { Text } from "@keystonejs/fields";

export const Poll: ListSchema = {
  // access: {
  //   read: true,
  //   update: false,
  //   delete: false,
  //   create: false,
  // },
  fields: {
    name: { type: Text },
  },
};
