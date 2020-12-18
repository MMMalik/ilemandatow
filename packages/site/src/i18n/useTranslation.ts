import React from "react";
import { I18nContext } from "./I18nContext";

export const useTranslation = () => {
  const { translations, path, siteLanguage, dateFormat } = React.useContext(
    I18nContext
  );

  return {
    t: (key: string) => translations?.[key] ?? key,
    path,
    language: siteLanguage,
    dateFormat,
  };
};
