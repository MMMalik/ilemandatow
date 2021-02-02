export const isDev = process.env.NODE_ENV === "development";

export const isProd = process.env.NODE_ENV === "production";

export const setupEnv = () => {
  const envConfig = isProd ? { path: process.env.API_ENV_PATH } : undefined;
  require("dotenv").config(envConfig);
};
