import { useTranslation } from "@i18n";
import * as React from "react";

const About: React.FC = () => {
  const { t } = useTranslation();
  return <>{t("aboutUs")}</>;
};

export default About;
