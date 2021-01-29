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

const pkg = require("../../package.json");

export const initKeystone = () => {
  const { secret: cookieSecret, ...cookie } = config.cookie;

  const keystone = new Keystone({
    appVersion: {
      version: pkg.version,
      addVersionToHttpHeaders: true,
    },
    adapter: new KnexAdapter({
      dropDatabase: isDev,
      knexOptions: config.db,
    }),
    cookie,
    cookieSecret,
  });

  keystone.createList("Party", Party);
  keystone.createList("Poll", Poll);
  keystone.createList("PollCompany", PollCompany);
  keystone.createList("PollMethod", PollMethod);
  keystone.createList("PollResult", PollResult);
  keystone.createList("Publisher", Publisher);

  return keystone;
};
