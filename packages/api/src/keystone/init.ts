import { Keystone } from "@keystonejs/keystone";
import { KnexAdapter } from "@keystonejs/adapter-knex";
import { PasswordAuthStrategy } from "@keystonejs/auth-password";
import {
  Party,
  Poll,
  PollCompany,
  PollMethod,
  PollResult,
  Publisher,
  User,
} from "../lists";
import { config } from "../config";
import { sessionStore } from "./sessionStore";

export const initKeystone = () => {
  const { version } = config.app;
  const { drop, ...db } = config.db;
  const { secret: cookieSecret, ...cookie } = config.cookie;

  const keystone = new Keystone({
    appVersion: {
      version,
      addVersionToHttpHeaders: true,
    },
    adapter: new KnexAdapter({
      dropDatabase: drop,
      knexOptions: db,
    }),
    cookie,
    cookieSecret,
    sessionStore: sessionStore(),
  });

  keystone.createList("Party", Party);
  keystone.createList("Poll", Poll);
  keystone.createList("PollCompany", PollCompany);
  keystone.createList("PollMethod", PollMethod);
  keystone.createList("PollResult", PollResult);
  keystone.createList("Publisher", Publisher);
  keystone.createList("User", User);

  const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: "User",
    config: {
      identityField: "username",
      secretField: "password",
    },
  });

  return { keystone, authStrategy };
};
