import { Text, Password, Select } from "@keystonejs/fields";
import { canAdmin } from "../access";
import { idField } from "../common";

export const User = {
  labelField: "username",
  fields: {
    id: idField,
    username: { type: Text, isUnique: true },
    password: { type: Password },
    role: { type: Select, options: ["Admin", "Editor", "Viewer"] },
  },
  access: {
    read: canAdmin,
    create: canAdmin,
    update: canAdmin,
    delete: canAdmin,
    auth: true,
  },
};
