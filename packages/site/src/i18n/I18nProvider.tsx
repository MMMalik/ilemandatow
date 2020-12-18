import * as React from "react";
import { I18nCtx } from "../types";
import { I18nContext } from "./I18nContext";

interface Props {
  i18n: I18nCtx;
}

const I18nProvider: React.FC<Props> = ({ children, i18n }) => {
  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
