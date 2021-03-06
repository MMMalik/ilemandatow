import { GraphQLApp } from "@keystonejs/app-graphql";
import { AdminUIApp } from "@keystonejs/app-admin-ui";
import { initKeystone } from "./init";

export const { keystone, authStrategy } = initKeystone();

export default {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ authStrategy })],
  configureExpress: (app: any) => {
    app.set("trust proxy", true);
  },
};
