import * as React from "react";
import { TopbarLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return <TopbarLink to={routes.about.link()}>{t("docs")}</TopbarLink>;
};

export default AboutUs;
