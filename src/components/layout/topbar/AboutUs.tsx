import * as React from "react";
import { useTranslation } from "react-i18next";
import { routes } from "@routes";
import { TopbarLink } from "@components/ui/topbar";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return <TopbarLink to={routes.about.path}>{t("aboutUs")}</TopbarLink>;
};

export default AboutUs;
