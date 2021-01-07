import * as React from "react";
import { useTranslation } from "../i18n";

const Privacy: React.FC = () => {
  const { t } = useTranslation();
  return <>{t("privacy")}</>;
};

export default Privacy;
