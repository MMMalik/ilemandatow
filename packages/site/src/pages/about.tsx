import * as React from "react";
import { useTranslation } from "../i18n";

const About: React.FC = () => {
  const { t } = useTranslation();
  return <>{t("aboutUs")}</>;
};

export default About;
