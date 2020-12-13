import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./locales/en.json"),
    },
    pl: {
      translation: require("./locales/pl.json"),
    },
  },
  lng: "pl",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
