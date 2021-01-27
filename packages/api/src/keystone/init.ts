import { Keystone } from "@keystonejs/keystone";
import { KnexAdapter } from "@keystonejs/adapter-knex";
import {
  Party,
  Poll,
  PollCompany,
  PollMethod,
  PollResult,
  Publisher,
} from "../lists";
import { config, isDev } from "../config";

export const initKeystone = () => {
  const keystone = new Keystone({
    adapter: new KnexAdapter({
      dropDatabase: isDev,
      knexOptions: config.db,
    }),
  });

  keystone.createList("Party", Party);
  keystone.createList("Poll", Poll);
  keystone.createList("PollCompany", PollCompany);
  keystone.createList("PollMethod", PollMethod);
  keystone.createList("PollResult", PollResult);
  keystone.createList("Publisher", Publisher);

  return keystone;
};
