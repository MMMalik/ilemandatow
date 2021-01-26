import { Keystone } from "@keystonejs/keystone";
import { MongooseAdapter } from "@keystonejs/adapter-mongoose";
import { GraphQLApp } from "@keystonejs/app-graphql";
import { AdminUIApp } from "@keystonejs/app-admin-ui";
import { Poll } from "../lists";
import { config } from "../config";

const keystone = new Keystone({
  adapter: new MongooseAdapter({
    mongoUri: config.db.uri,
  }),
});

keystone.createList("Poll", Poll);

export default {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp()],
};
