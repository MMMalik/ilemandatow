import * as React from "react";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";
import { TopbarLink } from "../../components/ui/topbar";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return <TopbarLink to={routes.about.link()}>{t("aboutUs")}</TopbarLink>;
};

export default AboutUs;
