import * as expressSession from "express-session";
import * as pgConnect from "connect-pg-simple";
import { config } from "../config";

export const sessionStore = () => {
  const PgSession = pgConnect(expressSession);
  return new PgSession({ conString: config.db.connection });
};
