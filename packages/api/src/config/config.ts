if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

export const config = {
  db: {
    uri: `mongodb+srv://${dbUser}:${dbPass}@dev0.umyvm.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  },
};
